//import { auth } from "@/lib/auth"; // path to your auth file
//import { toNextJsHandler } from "better-auth/next-js";
 
//export const { POST, GET } = toNextJsHandler(auth);


import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handlers = toNextJsHandler(auth);

export const POST = handlers.POST;
export const GET = handlers.GET;