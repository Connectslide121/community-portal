import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark
} from "@fortawesome/free-solid-svg-icons";

export default function PasswordTooltipIcon(props) {
  return (
    <FontAwesomeIcon
      icon={props.condition ? faCircleCheck : faCircleXmark}
      style={{ color: props.condition ? "green" : "red" }}
    />
  );
}
