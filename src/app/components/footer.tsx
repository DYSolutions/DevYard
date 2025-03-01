export default function Footer() {
    return (
        <div className="flex flex-col justify-center items-center border-t border-gray-300 text-sm">
            <div className="pt-10 pb-10  flex flex-row w-3/4 justify-between border-b border-gray-300">
                <div className="flex flex-col gap-1 text-neutral-500">
                    <img src="/dylogo.png" alt="Logo" width="100px" height="100px" />
                    <p>Sample Address <br />
                        Sample Address<br />
                        Sample Address</p>
                    <p>+94 756414302</p>
                    <p>+94 756414302</p>
                    <p>email address</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-blue-600">services</h3>
                    <ul className="text-neutral-500 flex flex-col gap-2">
                        <li> Web Development</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-blue-600">Company</h3>
                    <ul className="text-neutral-500 flex flex-col gap-2">
                        <li>Home</li>
                        <li>AboutUs</li>
                        <li>ContactUs</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-blue-600">Legal</h3>
                    <ul className="text-neutral-500 flex flex-col gap-2">
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
            <div className="pt-5 pb-5 text-neutral-500">
                © 2025 DevYard Solutions Private Limited. All rights reserved.
            </div>
        </div>
    )
}