const ResultPage = (data) => {
const responseData= data.data.fieldData
const portalData = data.data.portalData
console.log(responseData)
console.log(portalData.ClassAttendance)

// set variables for student basic information
const {G_StudentNum} = responseData;
const name =responseData["StudentBasics::chineseName"]
const parttimejob = responseData["StudentBasics::parttimeJob"]
const parttimeContact = responseData["StudentBasics::parttimeContact"]
const residentQualifiedNum = responseData["StudentBasics::residentQualifiedNum"]
const residentQualifiedLimit =responseData["StudentBasics::residentQualifiedLimit"].substr(6,4)+'/'+Number(responseData["StudentBasics::residentQualifiedLimit"].substr(0,2))+'/'+Number(responseData["StudentBasics::residentQualifiedLimit"].substr(3,2))
const lessonHoursRatio =(responseData["ClassAttendanceStatics::AVE_lessonHoursRatio"]*100).toFixed(1)
const lessonDaysRatio =(responseData["ClassAttendanceStatics::AVE_lessonDaysRatio"]*100).toFixed(1)
const lessonHoursSum =responseData["ClassAttendanceStatics::sum_hours"]
const lessonHoursSumFull =responseData["ClassAttendanceStatics::sum_hoursFull"]
const lessonDaysSum =responseData["ClassAttendanceStatics::sum_days"]
const lessonDaysSumFull =responseData["ClassAttendanceStatics::sum_daysFull"]

// set variables for attendance numbers
const {ClassAttendanceStatics} = portalData
const {ClassAttendance} = portalData
console.log(ClassAttendanceStatics[0])

  return (
<div className='w-96 bg-blue-200'>
    <p className='m-4 indent-3'>
        あなたの登録情報、出席状況を確認してください。登録情報が間違っていたり、在留カードの更新、アルバイト先の変更、住所の変更などがあった場合は速やかに事務室までご連絡ください。アプリ上の出席率の数字はあくまでも参考値で、出席率証明書に記載のある数字が正式な出席率となりますのでご注意ください。
    </p>
<div className="flex justify-center items-center">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><a href="mailto:info-wy@wayonihongo.com">事務局へメール</a></button>
</div>

    <h2>【登録情報】</h2>
    <dl className="m-2 bg-white flex flex-wrap text-center">
    <dt className="bg-gray-200 w-2/5 border-solid border-slate-400 border">学籍番号</dt>
    <dd className="p-1 w-3/5  border-solid border-slate-400 border">{G_StudentNum}</dd>
    <dt className="p-1 bg-gray-200 w-2/5 border-solid border-slate-400 border">名前</dt>
    <dd className="p-1 w-3/5 border-solid border-slate-400 border">{name}</dd>
    <dt className="p-1 bg-gray-200 w-2/5 border-solid border-slate-400 border">在留カードNo</dt>
    <dd className="p-1 w-3/5 border-solid border-slate-400 border">{residentQualifiedNum}</dd>
    <dt className="p-1 bg-gray-200 w-2/5 border-solid border-slate-400 border">在留カード期限</dt>
    <dd className="p-1 w-3/5 border-solid border-slate-400 border">{residentQualifiedLimit}</dd>
    </dl>
    <h2>【累計出席率】</h2>
    <dl className="m-2 bg-white flex flex-wrap text-center">
    <dt className="bg-gray-200 w-2/5 border-solid border-slate-400 border">累計出席率(時間)</dt>
    <dd className="p-1 w-3/5  border-solid border-slate-400 border">{lessonHoursRatio}%({lessonHoursSum}/{lessonHoursSumFull})</dd>
    <dt className="p-1 bg-gray-200 w-2/5 border-solid border-slate-400 border">累計出席率(日数)</dt>
    <dd className="p-1 w-3/5 border-solid border-slate-400 border">{lessonDaysRatio}%({lessonDaysSum}/{lessonDaysSumFull})</dd>
    </dl>
    <h2>【過去３ヶ月の月間出席率】</h2>
    <dl className="m-2 bg-white flex flex-wrap text-center">
        <dt className="bg-gray-200 p-1 w-1/5 border-solid border-slate-400 border" ></dt>
        <dt className="bg-gray-200 p-1 w-2/5 border-solid border-slate-400 border" >時間計算</dt>
        <dt className="bg-gray-200 p-1 w-2/5 border-solid border-slate-400 border" >日数計算</dt>
    {ClassAttendanceStatics.map((item,index) => {
       return (
        <>
       <dt className="bg-gray-200 w-1/5 border-solid border-slate-400 border">{Number(item["ClassAttendanceStatics::dateStart"].substr(0,2))}月</dt>
       <dd className="p-1 w-2/5  border-solid border-slate-400 border">{(item["ClassAttendanceStatics::lessonHoursRatio"] * 100).toFixed(1)}% ({item["ClassAttendanceStatics::lessonHours"]}/{item["ClassAttendanceStatics::lessonHoursFull"]})</dd>
       <dd className="p-1 w-2/5  border-solid border-slate-400 border">{(item["ClassAttendanceStatics::lessonDaysRatio"] * 100).toFixed(1)}% ({item["ClassAttendanceStatics::lessonDays"]}/{item["ClassAttendanceStatics::lessonDaysFull"]})</dd>
       </>
    )
})}
       </dl>

       <h2 className="m-2">【出席確認（過去20日分）】</h2>
{ClassAttendance.map((item,index)=> {
    return(
        <div>
                {index===0 ? <div className="ml-4 flex indent-10 justify-center align-middle bg-white w-80 pl-8"><div>1</div><div>2</div><div>3</div><div>4</div></div>:""}
   <div className="flex gap-x-5 ml-4 m-2 bg-white w-80 align-middle justify-center">

   <div>{item["ClassAttendance::Date"].substr(0,5)}({item["ClassAttendance::C_DayName"]}):</div>
   <div className={item["ClassAttendance::status_1"].includes("欠") ? "text-red-600" : item["ClassAttendance::status_1"]==="遅刻" ? "text-yellow-400" : ""}>
    {item["ClassAttendance::status_1"]}</div> 
   <div className={item["ClassAttendance::status_2"].includes("欠")  ? "text-red-600" : item["ClassAttendance::status_2"]==="遅刻" ? "text-yellow-400" : ""}>{item["ClassAttendance::status_2"]} </div> 
   <div className={item["ClassAttendance::status_3"].includes("欠")  ? "text-red-600" : ""}>{item["ClassAttendance::status_3"]} </div> 
   <div className={item["ClassAttendance::status_4"].includes("欠")  ? "text-red-600" : ""}>{item["ClassAttendance::status_4"]}</div> 
   </div>


        </div>
    )
})}
<div className="flex justify-center items-center">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 mb-20"><a href="mailto:info-wy@wayonihongo.com">事務局へメール</a></button>
</div>

    </div>
  )
}

export default ResultPage