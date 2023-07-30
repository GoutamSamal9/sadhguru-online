import { SurveyInterface } from "../../../../interface/survey/surveyInterface";


interface OnePageSurveyProps{
    surveyData: SurveyInterface
    sections: any
}

const OnePageSurvey=({surveyData, sections}:OnePageSurveyProps)=>{

    // console.log(surveyData);
    console.log(sections);
    

    return(
        <>

        </>
    )
}
export default OnePageSurvey;