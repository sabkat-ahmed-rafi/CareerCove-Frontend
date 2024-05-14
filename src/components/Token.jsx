import React from 'react';

const Token = () => {
    return (
        <>
            <section className=" min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Understanding Access Tokens and Refresh Tokens</h1>

        <div className=" p-6 rounded-lg shadow-md mb-6">
          <p className="mb-4">In today's interconnected digital world, security is paramount, especially when it comes to handling user authentication and authorization. Access tokens and refresh tokens play a crucial role in securing web applications and APIs. Let's dive deep into what they are and how they work.</p>
        </div>

        <div className=" p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">What are Access Tokens and Refresh Tokens?</h2>
          <p className="mb-4">Access tokens and refresh tokens are components of the OAuth 2.0 authentication framework. Access tokens are short-lived credentials used by an application to access protected resources on behalf of a user, while refresh tokens are long-lived credentials used to obtain a new access token once the current one expires.</p>
        </div>

        <div className=" p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">How Do They Work?</h2>
          <p className="mb-4">The workflow involving access tokens and refresh tokens typically follows several steps, including authentication, authorization grant, accessing resources, token expiration, and token refresh. Access tokens provide restricted access rights and expire after a certain period, while refresh tokens are used to obtain new access tokens without requiring the user to log in again.</p>
        </div>

        <div className=" p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Where Should We Store Them on the Client Side?</h2>
          <p className=" mb-4">Storing access tokens and refresh tokens securely on the client side is crucial to prevent unauthorized access and token theft. Best practices include using HTTP-only cookies, secure storage mechanisms provided by the platform, token rotation, token revocation, and token encryption.</p>
        </div>

        <p className="">
          By following these best practices, developers can ensure that access tokens and refresh tokens are stored securely on the client side, minimizing the risk of unauthorized access and data breaches.
        </p>
      </div>
    </section>
        </>
    );
};

export default Token;