import React, { useState, useEffect } from 'react'
import { DateTime } from "luxon"

function Countdown() {

const [now, setNow] = useState(DateTime.local())

useEffect(() => {
    setNow(DateTime.local().DATETIME_MED_WITH_SECONDS)
})

let bday = DateTime.local(2020, 12, 14, 8, 8)
console.log(now)
console.log(bday)

return <div>
    <p>{now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}</p>
    
    <p>Countdown goes here!</p>
</div>
}

export default Countdown