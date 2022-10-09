import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>no ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to{" "}
      <span style={{ color: "black" }}>
        <OverlayTrigger placement="right" overlay={popover}>
          <Button variant="success">Terms & Condition</Button>
        </OverlayTrigger>{" "}
      </span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => {
            setTcChecked(e.target.checked);
          }}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button role="button" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
}
