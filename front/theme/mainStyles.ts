import { makeStyles, Theme } from "@material-ui/core/styles";

const useMainStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
}));

export default useMainStyles;
