import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Component() {
  return (
    <Footer container>
      <div className="w-full lg:p-6">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:grid-cols-1">
        <div className="grid col-span-4 lg:grid-cols-3 gap-0 sm:mt-4 grid-cols-3 sm:gap-1">
            <div>
              <Footer.Title title="Home" className="text-black text-lg"/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-lg">Business</Footer.Link>
                <Footer.Link href="#" className="text-lg">Suppliers</Footer.Link>
                <Footer.Link href="#" className="text-lg">Usecases</Footer.Link>
                <Footer.Link href="#" className="text-lg">FAQ</Footer.Link>
                <Footer.Link href="#" className="text-lg">About Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="Support" className="text-black text-lg"/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-lg">Account</Footer.Link>
                <Footer.Link href="#" className="text-lg">Super Center</Footer.Link>
                <Footer.Link href="#" className="text-lg">Feedback</Footer.Link>
                <Footer.Link href="#" className="text-lg">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="Contacts" className="text-black text-lg"/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-lg">Careers</Footer.Link>
                <Footer.Link href="#" className="text-lg">Terms of Service</Footer.Link>
                <Footer.Link href="#" className="text-lg">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="text-lg">Coockie Policy</Footer.Link>
                <Footer.Link href="#" className="text-lg py-1"><Footer.Copyright className="text-lg hidden lg:block" href="#" by="Hussain™. All rights reserved." year={2024} /></Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className=" col-span-8">
          <Footer.Title title="Tranch you later, innovator." className="text-black text-xl pt-5"/>
          <div className="flex justify-between border border-black rounded-tr-2xl">
            <div className="text-base text-gray-600 p-3">Subscribe Now</div>
            <div className="bg-black text-white p-3 rounded-tr-2xl">
                Submit
            </div>
          </div>
          <div className="w-full sm:flex sm:items-center my-6 sm:justify-between">
          
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
          <Footer.Copyright className="text-lg my-6 lg:hidden " href="#" by="Hussain™. All rights reserved." year={2024} />
        </div>
          </div>
          
        </div>
        <Footer.Divider />
       
      </div>
    </Footer>
  );
}
