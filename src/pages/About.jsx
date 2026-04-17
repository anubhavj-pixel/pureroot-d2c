export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#f0ebe3] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#8b6f5e] text-sm uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-light text-[#3d3530] leading-tight mb-6">
            Born from a frustration with labels we couldn't read.
          </h1>
          <p className="text-[#7a6a5e] text-lg leading-relaxed">
            PureRoot started in a small kitchen in Bangalore in 2021. Our founder,
            tired of decoding ingredient lists full of synthetic chemicals, set out to
            build a skincare brand where every single ingredient was something you
            could find in nature — and actually pronounce.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: 'Certified Organic',
            body: 'Every botanical we use is sourced from farms certified by India Organic or USDA Organic. We visit our suppliers annually and publish our sourcing reports.',
          },
          {
            title: 'Cruelty Free & Vegan',
            body: 'No animal testing, ever. Our entire range is 100% vegan — no beeswax alternatives here, we just don\'t need it.',
          },
          {
            title: 'Plastic-Neutral',
            body: 'For every gram of plastic in our packaging, we fund the recovery of an equivalent amount from the environment through certified offset programmes.',
          },
        ].map(v => (
          <div key={v.title} className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-lg font-medium text-[#3d3530] mb-3">{v.title}</h3>
            <p className="text-[#7a6a5e] text-sm leading-relaxed">{v.body}</p>
          </div>
        ))}
      </section>

      {/* Team note */}
      <section className="bg-[#3d3530] text-white">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-[#c9b9a8] text-lg leading-relaxed italic">
            "We believe skincare doesn't need to be complicated — just honest.
            Every product we make, we use ourselves. That's our quality check."
          </p>
          <p className="mt-6 text-[#8b7b6e] text-sm">— Priya Sharma, Founder</p>
        </div>
      </section>
    </div>
  )
}
