import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "black" }}>Terms & Condition</span>
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
