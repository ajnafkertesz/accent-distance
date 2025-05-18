library(tidyverse)

# grab all CSV files in results/ and append
folder_path <- "results/data/"

csv_files <- list.files(path = folder_path, pattern = "\\.csv$", full.names = TRUE)

all_data <- csv_files %>%
  map_dfr(read_csv) 

all_data
