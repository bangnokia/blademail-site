import Features from "~/components/features";
import Hero from "~/components/hero";
import Pricing from "~/components/pricing";

export default function Index() {
    return (
        <>
            <div className="bg-white">
                <main>
                    <Hero />

                    <Features />

                    <Pricing />
                </main>
            </div>
        </>
    );
}
