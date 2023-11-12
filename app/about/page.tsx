import Navigation from '@/src/components/Navigation';
import Footer from '@/src/components/Footer';
import MulaiButton from '@/src/components/Mulai';
import '@/src/styles/home.css';

export default function Home() {
  return (
    <>
      <Navigation route={3} />
      <section className="bg-white">
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16">
  <div className="flex justify-center items-center mt-16">
    <TeamMemberCard
      imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      name="Nevan Artwin"
      role="Leader"
      introduction="Salken! Kenalin aku Nevan Artwin Pratama Hidayat, atau dipanggil Nevan.  Aku adalah salah satu pelajar SMK RUS Kudus,, sama seperti Royyan dan Alikha. Hobiku adalah lebih membuat web dan desain juga memberikan ide, maka dari itu aku disini sebagai Team Leader dalam web ethically."
    />
  </div>
  <div className="flex justify-center items-center">
    <TeamMemberCard
      imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      name="Royyan Ahmad Z."
      role="Designer"
      introduction="Hi,  こんにちは! Aku Royyan Ahmad Zaydan atau biasa dipanggil Royyan. Aku berasal dari Surabaya, Saat ini aku bersekolah di SMK RUS Kudus, dan tertarik tentang web design, dan graphic design"
    />
  </div>
  <div className="flex justify-center items-center mb-10">
    <TeamMemberCard
      imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=880&q=80"
      name="Alikha Mutiara H."
      role="Developer"
      introduction="Yoooo! Aku Alikha Mutiara Hati, temen-temen biasanya manggil aku Alikha. Aku berasal dari Tuban, namun sedang bersekolah di SMK Raden Umar Said Kudus. Obsesiku di dunia web development sungguh besar!"
    />
  </div>
</div>

      </section>
      <Footer/>
    </>
  );
}

function TeamMemberCard({
  imageSrc,
  name,
  role,
  introduction,
}: {
  imageSrc: string;
  name: string;
  role: string;
  introduction: string;
}) {
  return (
    <div className="p-4 border shadow-lg rounded-xl group" style={{ height: '300px', width: '1200px' }}>
      <div className="flex items-center h-full">
        <img
          className="object-cover w-60 h-60 rounded-full border border-[#FDD752] border-8"
          src={imageSrc}
          alt=""
        />
        <div className="ml-4 flex-1">
          <h1 className="text-xl font-semibold text-[#3E3E3E] capitalize">
            {name} -{' '}
            <span className="text-gray-500 text-sm">{role}</span>
          </h1>
          <p className="text-[#3E3E3E]0 overflow-hidden" style={{ maxHeight: '100px' }}>
            {introduction}
          </p>
        </div>
      </div>
    </div>
  );
}

  
  
  
  
  
