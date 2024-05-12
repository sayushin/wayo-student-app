import connectDB from "@/config/database"
import filemakerExecuteScript from "@/filemakerapi/filemakerexecutescript"
import filemakerGet from "@/filemakerapi/filemakerget"

// export const GET = async (request) => {
// try {
//   console.log(request.body)
//   const {username,password}= request.body;
//   let token = await connectDB(username,password);
//   await filemakerExecuteScript(token);
//   const records= await filemakerGet(token);
//   return new Response(JSON.stringify({message:'Hello World',token:token,records:records}), {status:200});
// } catch (error) {
//   console.log(error);
//   return new Response('Something Went Wrong',{status:500});
// }
// }

export const POST = async (request) => {
  try {
    const body = await request.json();
    const {username,password}= body;
    console.log(username,password)
    let token = await connectDB(username,password);
    await filemakerExecuteScript(token);
    const records= await filemakerGet(token);
    return new Response(JSON.stringify({message:'Success',token:token,records:records}), {status:200});
  } catch (error) {
    return new Response('Something Went Wrong',{status:500});
  }
  }