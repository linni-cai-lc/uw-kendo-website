import React from "react"
import { Button, OverlayTrigger, Popover } from "react-bootstrap"
import { historyList } from "../data/info"
import Timeline from "@material-ui/lab/Timeline" 
import TimelineItem from "@material-ui/lab/TimelineItem" 
import TimelineSeparator from "@material-ui/lab/TimelineSeparator" 
import TimelineConnector from "@material-ui/lab/TimelineConnector" 
import TimelineContent from "@material-ui/lab/TimelineContent" 
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

const HistoryBlock = () => {
   const popover = (history) => (
      <Popover id="popover-basic">
        <Popover.Content>
          <p>{history.detail}</p>
        </Popover.Content>
      </Popover>
    )

   return (
      <div>
         <h3>
            The History
         </h3>
         <Timeline>
            {
               historyList.map((history, historyIdx) => (
                  <TimelineItem key={`history-${historyIdx}`}>
                     <TimelineOppositeContent>
                        {history.date}
                     </TimelineOppositeContent>
                     <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                     </TimelineSeparator>
                     <TimelineContent>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover(history)}>
                           <Button
                              variant="success"
                              style={{ backgroundColor: "#5B3080", borderColor: "#5B3080" }}
                           >
                              {history.abstract}
                           </Button>
                        </OverlayTrigger>
                     </TimelineContent>
                  </TimelineItem>
               ))
            }
            
         </Timeline>
      </div>
   )
}

export default HistoryBlock