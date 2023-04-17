import {
  // createFilterOptions,
  MenuItem,
  SxProps,
  Theme,
} from "@mui/material";
import React from "react";
// import { useFormContext } from "react-hook-form";
import { countries } from "../../_data/CountryCode";
import RHFSelect from "./RHFSelect";

type Props = {
  name: string;
  sx?: SxProps<Theme>;
  editable?: boolean;
};

export const RHFAutocompleteCountryCode = ({
  name,
  editable,
  ...rest
}: Props) => {
  return (
    <RHFSelect name={name} {...rest} label="Código de pais">
      {countries.map((c) => (
        <MenuItem key={c.phone} value={`+${c.phone}`}>
          {c.phone}
        </MenuItem>
      ))}
    </RHFSelect>
  );
};
