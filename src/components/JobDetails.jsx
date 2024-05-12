import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";


const JobDetails = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    
    const loadedJob = useLoaderData();
    const {user} = useAuth()
    const navigate = useNavigate()

    const { _id, title, photo, description, salary, jobDeadline, jobOption, postDate } = loadedJob
    

    const handleApply = (e) => {
        e.preventDefault();
        const form = e.target

        const applyerName = form.name.value
        const applyerEmail = form.email.value
        const cv = form.cv.value

        if(user.email == loadedJob.email){
            return  Swal.fire({
                position: "center",
                icon: "error",
                title: "You post this job.",
                showConfirmButton: false,
                timer: 2000,
              });
        }

        if(new Date().toISOString().slice(0, 10) > jobDeadline){
            return  Swal.fire({
                position: "center",
                icon: "error",
                title: "This job is deadline is over.",
                showConfirmButton: false,
                timer: 2000,
              });
        }

        const appliedJobsInfo = { _id, title, photo, description, salary, jobDeadline, jobOption, postDate, applyerName, applyerEmail, cv };

        axios.post("http://localhost:3000/appliedJobs", {appliedJobsInfo})
        .then(data => {
            console.log(data);
        })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Applied Successfully",
            showConfirmButton: false,
            timer: 2000,
          });

          navigate(`/appliedJobs`)
    }

  return (
    <>
      <article className="flex justify-center items-center mt-2 mb-14">
        <section className="w-[40%] space-y-3">
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold font-serif">
              {loadedJob.title}
            </h1>
            <img className="w-full " src={loadedJob.photo} alt="" />
            <p className="font-serif">{loadedJob.description}</p>
            <div className="flex justify-between">
              <p className="font-serif font-semibold">
                Salary: {loadedJob.salary}
              </p>
              <p className="font-serif font-semibold">
                Applicants: {loadedJob.applicantNumber}
              </p>
            </div>
          </div>
          <div>
            <Button
              onPress={onOpen}
              className="w-full btn text-white font-extrabold bg-gradient-to-r from-yellow-400 to-pink-500"
            >
              Apply
            </Button>
            <Modal
            backdrop={"blur"}
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              placement="top-center"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                  <form onSubmit={handleApply}>
                    <ModalHeader className="flex flex-col gap-1">
                      Confirm Apply
                    </ModalHeader>
                    
                    <ModalBody>
                      <Input
                      name="name"
                        autoFocus
                        label="Name"
                        placeholder="Enter your Name"
                        variant="bordered"
                      />
                      <Input
                      name="email"
                        label="Email"
                        placeholder="Enter your Email"
                        type="text"
                        variant="bordered"
                        defaultValue={user.email}
                        readOnly={true}
                      />
                      <Input
                      name="cv"
                        label="CV"
                        placeholder="Enter your CV link"
                        type="text"
                        variant="bordered"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="danger"
                        variant="flat"
                        onPress={onClose}
                        className="font-extrabold"
                      >
                        Close
                      </Button>
                      <Button
                        type="submit"
                        color="primary"
                        onPress={onClose}
                        className="text-white font-extrabold bg-gradient-to-r from-yellow-400 to-pink-500"
                      >
                        Confirm
                      </Button>
                    </ModalFooter>
                    </form>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </section>
      </article>
    </>
  );
};

export default JobDetails;
