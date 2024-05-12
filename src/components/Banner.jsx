import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <section>
            <div className="bg-gradient-to-b from-purple-600 to-orange-500
 hero border min-h-[543px] bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-5xl font-extrabold text-white">Unlock Your Dream Career</h1>
      <p className="py-6 text-lg text-white">Discover exciting job opportunities that match your skills and aspirations. Join thousands of successful job seekers who found their ideal jobs through our platform.</p>
      <Link to='/allJobs'><button className="btn text-white font-extrabold bg-gradient-to-r from-yellow-400 to-pink-500">Explore Jobs Now</button></Link>
    </div>
  </div>
</div>
            </section>
        </>
    );
};

export default Banner;