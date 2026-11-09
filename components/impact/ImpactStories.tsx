import Link from "next/link";
import { Media } from "@/components/ui/Media";
import { images } from "@/lib/images";

const stories = [
  {
    src: images.donationWaVideo,
    title: "Three language labs donated at Wa",
    body: "Three donations in one visit — watch laboratories reach schools in the Upper West Region.",
    tag: "Field donation",
  },
  {
    src: images.labSefwiVideo,
    title: "Installation at Sefwi Bode Roman school",
    body: "A new French laboratory installed and handed over to staff and students.",
    tag: "Installation",
  },
  {
    src: images.canalPlusVideo,
    title: "Recognition from Canal+ — 30 years in Ghana",
    body: "Canal+ honoured ROLAC for promoting French studies during their 30th anniversary in Ghana.",
    tag: "Partnership",
  },
  {
    src: images.amaniampongThanksVideo,
    title: "Amaniampong headmistress says thank you",
    body: "The headmistress of Amaniampong shares her appreciation after receiving a French laboratory.",
    tag: "Appreciation",
  },
  {
    src: images.districtDirectorVideo,
    title: "A satisfied district director speaks",
    body: "A district director acknowledges the impact of ROLAC laboratories in their schools.",
    tag: "Testimony",
  },
  {
    src: images.teamMampong,
    title: "The team behind the work",
    body: "Meet the ROLAC team in the field at Mampong.",
    tag: "Our people",
  },
  {
    src: images.yaaAsantewaaLabDonation,
    title: "A language lab for Yaa Asantewaa SHS",
    body: "French laboratory equipment donated and installed for the school community.",
    tag: "Education",
  },
  {
    src: images.teachersTrainingCentre,
    title: "Training at Rosa's Language Centre",
    body: "Teachers come together for training at the ROLAC centre.",
    tag: "Training",
  },
];

export function ImpactStories() {
  return (
    <section
      aria-labelledby="impact-title"
      className="bg-white py-20 motion-safe:animate-fade-in sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow">Impact in motion</p>
          <h2
            id="impact-title"
            className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl"
          >
            Watch the work happen.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Real installations, real donations, real voices — filmed in schools
            and communities across Ghana.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((story) => (
            <article
              key={story.src}
              className="card card-hover flex flex-col overflow-hidden motion-safe:animate-slide-up"
            >
              <div className="relative aspect-[4/5] bg-slate-950">
                <Media
                  src={story.src}
                  alt={story.title}
                  className="h-full w-full object-cover"
                  video={{ controls: true, preload: "metadata", muted: true }}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-700">
                  {story.tag}
                </span>
                <h3 className="mt-2 text-base font-semibold tracking-tight text-slate-950">
                  {story.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {story.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/about" className="btn btn-outline">
            See the full story
          </Link>
        </div>
      </div>
    </section>
  );
}
