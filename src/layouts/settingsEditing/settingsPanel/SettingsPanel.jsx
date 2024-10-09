import { useSelector } from 'react-redux';
import RangeInput from './RangeInput';
import ColorInput from './ColorInput';
import { Card, CardBody, CardHeader, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function SettingsPanel() {

    const settingsProps = useSelector((state) => state.settingsProperties);
    
    const boxInputs = settingsProps.map((input,index)=>{
            if(input.type === "range"){
                return <RangeInput key={index} inputData={input} />
            }else if(input.type === "color"){
                return <ColorInput key={index} inputData={input} />
            }
    });

  return (
    <Card className='col-md-11 w-100 mb-3 ms-1'>
            <CardHeader>
                Settings
            </CardHeader>
            <CardBody>
                <ListGroup className='list-group-flush'>
                    {boxInputs.map((input,index) =>
                        (<ListGroupItem key={index}>{input}</ListGroupItem>)
                        )
                    }
                </ListGroup>
            </CardBody>
    </Card>
  )
}
