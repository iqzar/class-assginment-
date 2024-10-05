import Image from "next/image";
import Header from './header';
import Layout from './layout';
import image from './public/image1.png';
import image2 from './public/biryaani.jpg';
import image3 from './public/chiken.jpg';
import image4 from './public/burger.jpg';
import image5 from './public/kabuli.jpg';
import image6 from './public/halwa.jpg';
import image7 from './public/nihari.jpg';
import image8 from './public/kabab.jpg';
import image9 from './public/namkeen.jpg';
import image10 from './public/fish.jpg';
import Recipe from "./recipe/page";
import Contact from "./contact/page";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container mx-auto px-4 font-custom">
      <div className="mt-7 container mx-auto px-4">
        <Image src={image} alt="image1" width={2050} height={1080} />
      </div>
      
      <div className="mt-7">
        <h2 className="text-2xl hover:text-3xl mb-2">Recipe</h2>
        <div className="border-b-2 border-black mr-5 ml-5"></div>
      </div>

      <div className="container mx-auto px-4 grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-7">

        {/* Card 1 */}
        <div className="rounded shadow-md mb-5">
          <Image className="hover:blur-sm" src={image2} width={300} height={150} alt="Sindhi Biryani" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sindhi Biryani</div>
            <p className="text-gray-700 text-sm">"A burst of spices in every bite."</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded shadow-md mb-5">
          <Image className="hover:blur-sm" src={image3} width={300} height={120} alt="Chicken Karahi" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Chicken Karahi</div>
            <p className="text-gray-700 text-sm">"A flavorful masterpiece simmered to perfection."</p>
          </div>
        </div>

         {/* Card 3 */}
        <div className="rounded shadow-md mb-5">
          <Image className="hover:blur-sm" src={image4} width={300} height={120} alt="burger" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Anday wala burger</div>
            <p className="text-gray-700 text-sm">"Karachi's iconic blend of juicy flavors and local charm."</p>
          </div>
        </div>

         {/* Card 4 */}

        <div className="rounded shadow-md mb-5">
          <Image className="hover:blur-sm" src={image5} width={300} height={120} alt="pulao" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Kabuli Pluao</div>
            <p className="text-gray-700 text-sm">"Peshawar's fragrant fusion of rice, tender meat, and spices."</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="rounded shadow-md mb-5">
          <Image className="hover:blur-sm" src={image6} width={300} height={220} alt="Gajar-halwa" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Gajar ka Halwa</div>
            <p className="text-gray-700 text-sm">"Warm delight made from carrots and creamy goodness."</p>
          </div>
        </div>

         {/* Card 6 */}
        <div className="rounded shadow-md mb-5">
          <Image className="hover:blur-sm" src={image7} width={300} height={150} alt="Nihari" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mutton Nihari</div>
            <p className="text-gray-700 text-sm">"A slow-cooked, spiced masterpiece that melts in your mouth."</p>
          </div>
        </div>
      
         {/* Card 7 */}

        <div className="rounded shadow-md mb-5">
          <Image className="hover:blur-sm" src={image8} width={300} height={120} alt="kabab" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Gola Kabab</div>
            <p className="text-gray-700 text-sm">"Tender, flavorful skewers that pack a punch of spices in every bite."</p>
          </div>
        </div>

         {/* Card 8 */}
        <div className="rounded shadow-md mb-5">
          <Image className="hover:blur-sm" src={image9} width={300} height={220} alt="gosht" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Namkeen Gosht</div>
            <p className="text-gray-700 text-sm">A savory, spiced meat dish that delights the senses."</p>
          </div>
        </div>
       
      </div>
      
      
    </div>
  );
};

export default Home;
