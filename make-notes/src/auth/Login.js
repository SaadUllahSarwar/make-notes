import React from "react";

const Login = () => {

    function handleSubmit(){
        console.log("handleSubmit");
    }

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Login</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />

            <button type="submit" class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Login</button>
          </form>

          <div class="text-grey-dark mt-6">
                    Dont have an account? <br/>
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Register
                    </a>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
