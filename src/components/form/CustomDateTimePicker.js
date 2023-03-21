import DateTimePicker from "react-datetime-picker";
import styled from "styled-components";

const DateTimePickerWrapper = styled(DateTimePicker)`
    min-height:48px;
    height:64px;
    border-radius:16px;
    border-color:#1c1c1c;
    width:100%;
    
`;

export default function CustomDateTimePicker(props){
    return(
        <DateTimePickerWrapper {...props}>

        </DateTimePickerWrapper>
     
    )
}