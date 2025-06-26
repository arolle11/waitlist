import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Image from "@rasenganjs/image";
import { Inbox, User, Mail, MoveRight } from "lucide-react";
import { PageComponent, Link } from "rasengan";

const Home: PageComponent = () => {
  return (
    <section className="w-full min-h-screen flex flex-col font-raleway bg-background text-foreground">
      <div className="fixed -top-[350px] blur-[400px] left-1/2 -translate-x-1/2 size-[300px] bg-violet rounded-full"></div>
      <header className="w-full h-[80px] px-8 flex justify-end items-center gap-2">
        <Button className="h-10">Update</Button>
        <Button className="size-10 p-0 flex justify-center items-center">
          <Inbox size="16" />
        </Button>
      </header>
      <main className="w-full flex justify-center items-center min-h-[580px]">
        <div className=" w-full md:w-[500px] flex flex-col justify-start items-center px-4">
          <Image
            src="/rasengan.svg"
            width={80}
            height={80}
            alt="Rasengan Logo"
          />

          <p className="text-sm font-medium text-foreground/40 mt-4">
            BOOTCAMP WAITLIST
          </p>
          <h1 className="text-4xl font-bold text-center mt-4 text-pretty">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#615f67] to-[#a5a6ab]">
              Join the Waitlist for the
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink to-violet">
              Dev girls Bootcamp!
            </span>
          </h1>
          <form className="w-full sm:w-[300px] max-w-[300px] h-auto mt-10">
            <div className="relative">
              <Input
                type="text"
                placeholder="Full name..."
                className="w-full text-sm pl-10"
              />
              <User
                size="16"
                className="absolute top-1/2 -translate-y-1/2 left-3"
              />
            </div>
            <div className="relative mt-4">
              <Input
                type="email"
                placeholder="Emai address..."
                className="w-full text-sm pl-10"
              />
              <Mail
                size="16"
                className="absolute top-1/2 -translate-y-1/2 left-3"
              />
            </div>

            <Button className="w-full mt-4 text-foreground/60 relative">
              <MoveRight className="absolute top-1/2 -translate-y-1/2 right-3" />
              <span className="text-sm">Continue</span>
            </Button>
          </form>
        </div>
      </main>
      <footer className="min-h-[150px] text-[12px] w-full flex flex-col items-center justify-center text-foreground/60">
        <p>Join the waitlist devgirl bootcamp</p>
        <p className="flex gap-1">
          <span>Designed by</span>
          <Link
            to="https://arollefona.me/"
            className="text-foreground text-medium"
          >
            @arolle
          </Link>
          <span>to give you back your time</span>
        </p>

        <p className="mt-2">
          Powered by
          <Link
            to="https://www.rasengan.dev/"
            className="text-foreground text-medium"
          >
            RasenganJs
          </Link>
        </p>
      </footer>
    </section>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Bootcamp Waitlist",
  description: "Keep track of newest updates from bootcamp",
};

export default Home;
