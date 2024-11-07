import React from "react";
import Container from "../ui/container/Container";
import Title from "../ui/title/Title";
import InputBox from "../ui/inputBox/InputBox";

export default function FilterComponent() {
  return (
    <Container className="filter-sec">
      <Title title="filter" />
      <Container className="filters">
        <Title title="size" />
        <Container>
          <Container>
            <InputBox type="checkbox" id="S" value="S" name="size"></InputBox>
            <label for="S"></label>
          </Container>

          <Container>
            <InputBox type="checkbox"></InputBox>
            <h3>s</h3>
          </Container>

          <Container>
            <InputBox type="checkbox"></InputBox>
            <h3>s</h3>
          </Container>

          <Container>
            <InputBox type="checkbox"></InputBox>
            <h3>s</h3>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
