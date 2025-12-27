import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Swap Skills. <br />
              <span className="text-indigo-600">Grow Together.</span>
            </h1>

            <p className="text-slate-600 mt-6 text-lg">
              SkillSwap connects clients and freelancers to exchange
              services, collaborate, and grow faster — without limits.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => navigate('/register')}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition font-semibold"
              >
                Get Started
              </button>

              <button
                onClick={() => navigate('/services')}
                className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl hover:bg-indigo-50 transition font-semibold"
              >
                Browse Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            How SkillSwap Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Create Account', desc: 'Join as client or freelancer in seconds' },
              { title: 'List or Browse Skills', desc: 'Post services or explore available skills' },
              { title: 'Collaborate & Grow', desc: 'Place orders, complete tasks, build trust' }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl text-center shadow-sm">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SKILLSWAP */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Why Choose SkillSwap?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="space-y-4 text-slate-600 text-lg">
              <li>No middlemen</li>
              <li>Secure orders</li>
              <li>Skill-based collaboration</li>
              <li>Perfect for freelancers & startups</li>
            </ul>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Built for Growth 
              </h3>
              <p className="text-slate-600">
                Whether you're offering services or searching for talent,
                SkillSwap gives you full control, transparency, and speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16">
        <div className="text-center text-white px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready to start swapping skills?
          </h2>

          <button
            onClick={() => navigate('/register')}
            className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
          >
            Join SkillSwap Today
          </button>
        </div>
      </section>
    </>
  )
}

export default Home
