library(jaysire)
library(comprehenr)

source("button_styles.R")

## SET UP & PID PAGE ###
exp_path <- "results"

# get audio from resource folder
resource_folder <- "resources"
resources <- list.files(resource_folder)

# extract audio files, 
audios <- resources[resources != "blank.mp3"]
US_audios <- audios[grepl("_US.mp3$", audios)]
other_audios <- audios[!grepl("_US.mp3$", audios)]

TR = "TR"
NZ = "NZ"

# select 30 random words from this list
random_US_audios <- sample(US_audios, 30)

# extract all word stems from random_US_audios
prefixes <- sub("_.*", "", random_US_audios)

# select other accent audios based on these prefixes
random_other_audios <- unlist(lapply(prefixes, function(p) {
  other_audios[grepl(paste0("^", p), other_audios, paste0("_", p))]
}))


# (0) Intro : ask for ID number
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

# Instructions for experiment
instructions1 <- trial_instructions(
  pages = c("Welcome to the Phonetic Similarity Study \n First you will hear a target word, followed by two differently accented pronunciations of the same word. \n Please select the word that sounds most similar to the target. \n There will be 30 trials in total. "),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

#### Main Study: Accent similarity ####

# (1) 30 trials of American speech and comparison

# trial 1
trial1 <- trial_instructions(
  pages = c("Trial 1: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

# get US audio
random_US <- sample(random_US_audios, 1)

# extract phrase
phrase <- strsplit(random_US, split="_")[[1]][1]
# get other audio
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
    grepl(paste0(NZ), random_other_audios))
  ]
random_other <- sample(random_other)

# filter out these phrases 
random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

# play us prompt
us_prompt1 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

# play voice 1
first_prompt1 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

# play voice 3
second_prompt1 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

# have participant make selection
response1 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 2
trial2 <- trial_instructions(
  pages = c("Trial 2: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt2 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt2 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt2 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response2 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 3
trial3 <- trial_instructions(
  pages = c("Trial 3: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt3 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt3 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt3 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response3 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 4
trial4 <- trial_instructions(
  pages = c("Trial 4: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt4 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt4 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt4 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response4 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 5
trial5 <- trial_instructions(
  pages = c("Trial 5: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt5 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt5 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt5 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response5 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 6
trial6 <- trial_instructions(
  pages = c("Trial 6: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt6 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt6 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt6 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response6 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 7
trial7 <- trial_instructions(
  pages = c("Trial 7: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt7 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt7 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt7 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response7 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 8
trial8 <- trial_instructions(
  pages = c("Trial 8: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt8 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt8 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt8 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response8 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 9
trial9 <- trial_instructions(
  pages = c("Trial 9: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt9 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt9 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt9 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response9 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 10
trial10 <- trial_instructions(
  pages = c("Trial 10: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt10 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt10 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt10 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response10 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 11
trial11 <- trial_instructions(
  pages = c("Trial 11: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt11 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt11 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt11 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response11 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 12
trial12 <- trial_instructions(
  pages = c("Trial 12: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt12 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt12 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt12 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response12 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 13
trial13 <- trial_instructions(
  pages = c("Trial 13: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt13 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt13 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt13 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response13 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 14
trial14 <- trial_instructions(
  pages = c("Trial 14: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt14 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt14 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt14 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response14 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 15
trial15 <- trial_instructions(
  pages = c("Trial 15: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt15 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt15 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt15 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response15 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 16
trial16 <- trial_instructions(
  pages = c("Trial 16: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt16 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt16 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt16 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response16 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 17
trial17 <- trial_instructions(
  pages = c("Trial 17: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt17 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt17 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt17 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response17 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 18
trial18 <- trial_instructions(
  pages = c("Trial 18: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt18 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt18 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt18 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response18 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 19
trial19 <- trial_instructions(
  pages = c("Trial 19: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt19 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt19 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt19 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response19 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 20
trial20 <- trial_instructions(
  pages = c("Trial 20: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt20 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt20 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt20 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response20 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 21
trial21 <- trial_instructions(
  pages = c("Trial 21: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt21 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt21 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt21 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response21 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 22
trial22 <- trial_instructions(
  pages = c("Trial 22: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt22 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt22 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt22 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response22 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 23
trial23 <- trial_instructions(
  pages = c("Trial 23: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt23 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt23 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt23 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response23 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 24
trial24 <- trial_instructions(
  pages = c("Trial 24: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt24 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt24 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt24 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response24 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 25
trial25 <- trial_instructions(
  pages = c("Trial 25: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt25 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt25 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt25 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response25 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 26
trial26 <- trial_instructions(
  pages = c("Trial 26: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt26 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt26 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt26 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response26 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 27
trial27 <- trial_instructions(
  pages = c("Trial 27: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt27 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt27 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt27 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response27 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 28
trial28 <- trial_instructions(
  pages = c("Trial 28: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt28 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt28 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt28 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response28 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to listen.",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 29
trial29 <- trial_instructions(
  pages = c("Trial 29: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt29 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt29 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt29 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response29 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# trial 30
trial30 <- trial_instructions(
  pages = c("Trial 30: Click on the \"Next\" button to listen."),
  show_clickable_nav = TRUE,
  post_trial_gap = 250
)

random_US <- sample(random_US_audios, 1)

phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]
random_other <- sample(random_other)

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

us_prompt30 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  button_html = html_speak1,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

first_prompt30 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[1]]),
  choices = c("Next"),
  button_html = html_speak2,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

second_prompt30 <- trial_audio_button_response(
  stimulus = insert_resource(random_other[[2]]),
  choices = c("Next"),
  button_html = html_speak3,
  trial_ends_after_audio = TRUE,
  response_ends_trial = FALSE,
  post_trial_gap = 250
)

response30 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  prompt = "Please select the speaker that sounds most similar to the target",
  choices = c("Voice 1", "Voice 2"),
  button_html = html_choices,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 250,
  data = insert_property(speakers = random_other)
)

# build trials
trials <- build_timeline(trial1, us_prompt1, first_prompt1, second_prompt1, 
  response1, trial2, us_prompt2, first_prompt2, second_prompt2, 
  response2, trial3, us_prompt3, first_prompt3, second_prompt3, 
  response3, trial4, us_prompt4, first_prompt4, second_prompt4, 
  response4, trial5, us_prompt5, first_prompt5, second_prompt5, 
  response5, trial6, us_prompt6, first_prompt6, second_prompt6, 
  response6, trial7, us_prompt7, first_prompt7, second_prompt7, 
  response7, trial8, us_prompt8, first_prompt8, second_prompt8, 
  response8, trial9, us_prompt9, first_prompt9, second_prompt9, 
  response9, trial10, us_prompt10, first_prompt10, second_prompt10, 
  response10, trial11, us_prompt11, first_prompt11, second_prompt11, 
  response11, trial12, us_prompt12, first_prompt12, second_prompt12, 
  response12, trial13, us_prompt13, first_prompt13, second_prompt13, 
  response13, trial14, us_prompt14, first_prompt14, second_prompt14, 
  response14, trial15, us_prompt15, first_prompt15, second_prompt15, 
  response15, trial16, us_prompt16, first_prompt16, second_prompt16, 
  response16, trial17, us_prompt17, first_prompt17, second_prompt17, 
  response17, trial18, us_prompt18, first_prompt18, second_prompt18, 
  response18, trial19, us_prompt19, first_prompt19, second_prompt19, 
  response19, trial20, us_prompt20, first_prompt20, second_prompt20, 
  response20, trial21, us_prompt21, first_prompt21, second_prompt21, 
  response21, trial22, us_prompt22, first_prompt22, second_prompt22, 
  response22, trial23, us_prompt23, first_prompt23, second_prompt23, 
  response23, trial24, us_prompt24, first_prompt24, second_prompt24, 
  response24, trial25, us_prompt25, first_prompt25, second_prompt25, 
  response25, trial26, us_prompt26, first_prompt26, second_prompt26, 
  response26, trial27, us_prompt27, first_prompt27, second_prompt27, 
  response27, trial28, us_prompt28, first_prompt28, second_prompt28, 
  response28, trial29, us_prompt29, first_prompt29, second_prompt29, 
  response29, trial30, us_prompt30, first_prompt30, second_prompt30, 
  response30) %>%
  set_parameters(randomize_order = TRUE)

# (2) Finish screen
finish <- trial_html_keyboard_response(
  stimulus = "Thank you for your participation! To receive full credit you will be redirected to complete a brief demographic questionnaire. https://utexas.qualtrics.com/jfe/form/SV_es5YLeHNdLkWZ4W",
  choices = respond_any_key()
)

# build final experiment
build_experiment(
  timeline = build_timeline(id_part, instructions1, trials, finish),
  path = exp_path,
  resources = build_resources(resource_folder),
  use_webaudio = TRUE,
  on_finish = save_locally()
)

# and run...
run_locally(exp_path)

