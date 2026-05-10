import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div >
      {/* <Navbar /> */}
      <div className="px-5 py-30 lg:py-40 md:px-12 xl:px-18 border-b border-gray-400 [&_h2]:text-2xl [&_h2]:font-bold [&_p]:text-lg [&_p]:text-gray-600 [&_h2]:mt-10 [&_h2]:mb-4">
        <h1 className='text-3xl font-bold'>Imprint</h1>
        <div>
          <h2>Information</h2>
          <p>Vishal Mishra</p>
          <p>Mumbai, India</p>
        </div>

        <div>
          <h2>Contact</h2>
          <p>Telephone: +91 7249084224</p>
          <p>Email: clevercoder0307@gmail.com</p>
        </div>

        <div>
          <h2>Consumer dispute resolution/Universal arbitration body</h2>
          <p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default page