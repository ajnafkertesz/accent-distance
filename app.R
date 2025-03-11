library(jaysire)
library(comprehenr)

# a temporary path to hold experiment & data 
# TODO: Specify actual path
exp_path <- "results"

# get audio from resource folder
resource_folder <- "resources"
resources <- list.files(resource_folder)

# extract audio files, 
US_audios <- resources/US #this is not working rip
other_audios<-resources/other

# (0) Intro : Instructions to experiment
blank_page <- trial_instructions(
  pages = c("Welcome to the Phonetic Similarity Study"),
  show_clickable_nav = TRUE,
  post_trial_gap = 1000
)

# ask for ID number
id_quest <- trial_survey_text(
  questions = question_text(
    prompt = "Participant ID",
    placeholder = "#",
    required = TRUE,
    name = "Participant ID"
  ),
  button_label = "Next"
)

id_part <- build_timeline(id_quest)

instruction_text <- c(
  "<p></p>"
)
instructions_with_images <- paste(paste(html_images, collapse = ""), instruction_text, 
                                  sep = "\n") #I'm not sure if this is needed
instructions1 <- trial_instructions(
  pages = instructions_with_images,
  show_clickable_nav = TRUE,
  post_trial_gap = 1000
)

# Main Study: Accent similarity

##Pick the US target

# iterate through word, removing words from list
random_audio <- sample(US, 1)


#Pick the first clickable sound (TR or NZ), this needs to be the same word as the US
# iterate through both speaker, removing speakers and words from list
random_otheraudio1 <- sample(other, 1)
# extract word
word <- strsplit(random_audio, split="_")[[1]][1]
# extract speaker
speaker <- strsplit(strsplit(random_audio, split="_")[[1]][2], split="\\.")[[1]][1]


#Pick the second sound (TR or NZ) this needs to be the same word as above
random_otheraudio2 <- sample(other, 1)
# extract word
word <- strsplit(random_audio, split="_")[[1]][1]
# extract speaker
speaker <- strsplit(strsplit(random_audio, split="_")[[1]][2], split="\\.")[[1]][1]

#selecting who sounds more similar to US
audio_response1 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = audios, #not sure what should go here tbh
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000,
  data = insert_property(image = pictures, speaker = speaker, subject = phrase, accent = stringr::str_sub(speaker, start= -2))
)

audio_trial2 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("Next️"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500)

#this should repeat for 30 trials and that's it