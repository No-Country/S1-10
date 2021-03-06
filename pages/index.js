import Head from "next/head";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Sidebar from "./../components/Sidebar";
import NextLink from "next/link";

import {
  useColorModeValue,
  Image,
  Button,
  Flex,
  Center,
} from "@chakra-ui/react";

const Home = () => {
  //{ session } console.log("Home function: ", session)

  const { session, status } = useSession();

  console.log("My session", session);
  if (status === "authenticated") {
    console.log(`Signed in as ${session.user.email}`);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("#F8F7F2", "gray.800")}
        >
          <Center my={{ base: "30px", lg: "50px" }}>
            <NextLink href="/overview" passHref>
              <Image
                src="https://res.cloudinary.com/dxjaruq2p/image/upload/v1649998648/Tecuido/inicio_zytldn.png"
                alt="te cuido logo"
              />
            </NextLink>
          </Center>
        </Flex>
      </main>
      {/*  
      <Sidebar />
*/}
      <footer></footer>
    </div>
  );
};

export default Home;

/* export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    //const { db } = await connectToDatabase();

    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
 */
/* 
export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log("Get Server side: ", session);

  if (!session) {
    return {
      redirect: {
        destination: "/ingreso",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
 */
