import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
	title: "La casa de mis recuerdos.",
	description: "Generated by show main page.",
};

export default function ClientLayout(
    {children}: Readonly<{children: React.ReactNode}>
) {
    return(
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/about_us">About us</Link>
                        <Link href="/rooms">Rooms</Link>
                        <Link href="/tours">Tours</Link>
                        <Link href="/instagram">Instagram Gallery</Link>
                    </nav>
                </header>
                <main>
                    <div className="container">
                        {children}
                    </div>
                </main>
                <footer>
                    <div>
                        <h2>Contact us</h2>
                        <p>
                            Pino Suárez 508, centro.<br/>
                            C.P. 68000 <br/>
                            Oaxaca, Oax. Mexico <br/>
                            Tel: +52(951)5158483 <br />
                            lacasademisrecuerdos@gmail.com
                        </p>
                    </div>
                    <div>
                        <h2>Other B&B by our family</h2>
                        <ul>
                            <li><a href="https://estanciadevalencia.com/" target="_black">Estancia Valencia</a></li>
                            <li><a href="https://www.airbnb.mx/rooms/16614360?source_impression_id=p3_1564244931_G7aB37n3mj9scaEG" target="_black">Estancia Jalatlaco</a></li>
                            <li><a href="https://www.airbnb.mx/rooms/36078219?_set_bev_on_new_domain=1564245277_qwV%2Bdn3jXxuRsjoA&source_impression_id=p3_1564245279_D4BPpx5SbqeqSSbN" target="_black">Estancia La heredad</a></li>
                        </ul>
                    </div>
                </footer>
            </body>
        </html>
    );
}