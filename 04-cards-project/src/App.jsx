import React from 'react'
import Card from './components/Card'

const App = () => {

const jobOpenings = [
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhjGtDVpCbI43esVmATVPezbYYFOwkYw5zw&s",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://lookaside.fbsbx.com/elementpath/media/?media_id=597423292333741&version=1779864741",
    companyName: "Meta",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopsUJhMMg7er7CoJ7fNfaFkSh1Dvyh2etAQ&s",
    companyName: "NVIDIA",
    datePosted: "4 weeks ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://i.pinimg.com/736x/56/3a/a2/563aa2189ef92dc242a7db5b91078804.jpg",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5EWT5s8FjIaMNZ09Ah7EVdML7pc-KEhuwfQ&s",
    companyName: "Uber",
    datePosted: "12 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    companyName: "Tesla",
    datePosted: "9 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Mumbai, India",
  },
];

  return (
    <div className="parent">
      {jobOpenings.map((elm, idx)=> {
       return (
        <div key={idx}>
          <Card company = {elm.companyName} post={elm.post} tag1={elm.tag1} tag2={elm.tag2} logo={elm.brandLogo} date={elm.datePosted} pay={elm.pay} location={elm.location}/>
        </div>
       )
      })}
    </div>

  )
}

export default App
