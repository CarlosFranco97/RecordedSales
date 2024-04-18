import dayjs from "dayjs"

export const convertDateToDays = (events = []) => {
    return events.map( event => {
        event.date = dayjs(event.date).format('YYYY-MM-DD');
        return event
    })
}
