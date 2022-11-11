import { Grid } from "@mui/material";
import { useState } from "react";
import ProbabilityDataPaper from "./ProbabilityDataPaper";
import RecentChecksTable from "./RecentChecksTable";
import UserInputPaper from "./UserInputPaper";

const MainContent = () => {
  const [inputName, setInputName] = useState({ name: "" });
  const [probabilityData, setProbabilityData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recentChecks, setRecentChecks] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputName((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const onClickGetJson = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.nationalize.io/?name=${inputName.name}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setProbabilityData(result);
      if (result.country.length > 0) {
        const date = new Date().toJSON();
        setRecentChecks((preData) => {
          return [{ ...result, date: date }, ...preData];
        });
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Grid container rowSpacing={2} columnSpacing={3}>
      <Grid item xs={6}>
        <UserInputPaper
          inputName={inputName}
          handleChange={handleChange}
          onClickGetJson={onClickGetJson}
        />
      </Grid>
      <Grid item xs={6}>
        <ProbabilityDataPaper
          isLoading={isLoading}
          probabilityData={probabilityData}
        />
      </Grid>
      <Grid item xs={12}>
        <RecentChecksTable recentChecks={recentChecks} />
      </Grid>
    </Grid>
  );
};

export default MainContent;
