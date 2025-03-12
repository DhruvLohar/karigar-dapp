import Image from "next/image";

export default function Component() {
    return (
        <div className="bg-background mt-10 text-card-foreground p-3 md:p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
                <div>
                    <Image src={"/img/ODOP1.png"} width={100} height={100} alt="certificate profile for odop" />
                </div>
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">Authenticity Certificate</h1>
                    <p className="text-muted-foreground">This certifies the authenticity of the following product:</p>
                </div>
                <div className="bg-card p-6 rounded-lg w-full space-y-4">
                    <div className="flex justify-between">
                        <span className="font-medium">Product Name:</span>
                        <span>Handcrafted Ceramic Vase</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium w-1/3">Product ID:</span>
                        <span>ART-CV-0123</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium w-1/3">Purchase Date:</span>
                        <span>24th June,2024</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium w-1/3">Customer Name:</span>
                        <span>John Doe</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium w-1/3">Artisan Name:</span>
                        <span>Jane Smith</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium w-1/3">Proof of purchase:</span>
                        <span className="break-all w-2/3">185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-sm md:text-base  w-1/3">Product Authentication:</span>
                        <span className="break-all w-2/3">e29f9459394518169fcd00c72c095c8986a09bacaf65ceb2c2435822e6cccae4</span>
                    </div>
                </div>
                <p className="text-muted-foreground text-sm">
                    This certificate is a guarantee of the authenticity and quality of the product.
                </p>
            </div>
        </div>
    )
}
