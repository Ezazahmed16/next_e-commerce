import parser from "html-react-parser";
import React from "react";

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/features/policies?type=about`);
    console.log(response)
    const data = await response.json();
    return data['data'];
}

const About = async () => {
    let about = await getData();
    return (
        <div className="max-w-7xl mx-auto justify-center items-center min-h-screen">
            {
                parser(about[0]['des'])
            }
        </div>
    );
}

export default About