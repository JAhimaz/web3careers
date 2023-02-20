import Navigation from "@layout/Navigation"
import Typography from "@components/atoms/Typography"
import Statistic from "@components/molecules/Statistic"

const Home = () => {
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
        <Typography size="md">Find Web3, Cryptocurrency and Blockchain related Job listings.</Typography>
        <input css={{
          marginTop: "1.5rem",
        }}></input>
        <div id="site-statistics" css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "60vw",
          marginTop: "3.25rem",
        }}>
          <Statistic header="432" subheader="Companies" />
          <Statistic header="5,201" subheader="Job Listings" />
          <Statistic header="16,000+" subheader="Applicants" />
        </div>
      </section>

      {/* Section for job listings */}
    </>
  )
}

export default Home