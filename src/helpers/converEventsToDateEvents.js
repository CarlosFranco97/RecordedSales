import {parseISO} from 'date-fns'
export const convertEventsToDateEvents = (events = []) => {
    return events.map(event => {
        event.date = parseISO(event.date); 
        return event
    })
}