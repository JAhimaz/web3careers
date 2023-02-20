import Navigation from "@layout/Navigation"
import Typography from "@components/atoms/Typography"
import Statistic from "@components/molecules/Statistic"
import Input from "@components/atoms/Input"
import Pill from "@components/atoms/Pill"
import { useState } from "react"

const Home = () => {

  // Temporary Tags
  const tags = [
    "Remote",
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
    "Blockchain",
    "Cryptocurrency",
    "Web3",
    "React",
    "Angular",
    "Vue",
  ]

  const [filterTags, setFilterTags] = useState<{ [tag: string]: boolean }>({});

  const handleTagClick = (tag: string) => {
    // Toggle the value of the tag in the dictionary
    setFilterTags((prevTags) => ({
      ...prevTags,
      [tag]: !prevTags[tag],
    }));
  };

  return (
    <>
      {/* Would be nice to put this inside the router and shared amongst pages. */}
      <Navigation />
      {/* Section for search */}
      <section id="title" css={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5.25rem",
      }}>
        <Typography size="xl" weight={600}>Let's Get Started. 🔍</Typography>
        <Typography size="md" css={{
          marginTop: "0.75rem",
        }}>Find Web3, Cryptocurrency and Blockchain related Job listings.</Typography>
        <Input 
        placeholder="Role, Company, Location or Tag..."
        type="text"
        name="main-search"
        id="main-search"
        onBlur={(e) => console.log(e.target.value)}
        css={{
          marginTop: "1.5rem",
          width: "50%",
        }} />
        <div id="site-statistics" css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "60vw",
          marginTop: "3.25rem",
          gap: "5.75rem",
        }}>
          <Statistic header={432} subheader="Companies" />
          <Statistic header={5201} subheader="Job Listings" />
          <Statistic header={16322} subheader="Applicants" />
        </div>
        { /* Section for tags */ }
        <section css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "2.5rem",
          width: "60%",
        }}>
          {tags.map((tag) => (
            <Pill
              onClick={(tag) => handleTagClick(tag)}
              active={filterTags[tag] ?? false}
              key={tag}
            >
              {tag}
            </Pill>
          ))}
        </section>
      </section>

      {/* Section for job listings */}
    </>
  )
}

export default Home