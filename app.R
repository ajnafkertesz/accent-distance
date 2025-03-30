library(jaysire)
library(comprehenr)

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

# extract their word stem
prefixes <- sub("_.*", "", random_US_audios)
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
  post_trial_gap = 1000
)


#### Main Study: Accent similarity ####

# (1) 30 trials of American speech and comparison

# trial 1
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

# filter out these phrases 
random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

audio_html <- to_vec(
  for(audio in random_other) 
    paste('<div style="display:inline-block; width:45%; margin: 1%; text-align:center; vertical-align:top;">',
          '<audio controls preload="none" onclick="this.play()">', 
          '<source type="audio/mpeg" src="resource/audio/', audio, '"></audio>',
          '<div style="display:inline-block; padding:10px 20px; background-color:#007BFF; color:white; ',
          'border-radius:6px; cursor:pointer; font-weight:bold;">', audio, '</div></div>', sep="", collapse=NULL)
) 

random_audio_html <- sample(audio_html)
#audio_html <- stringr::str_match(random_audio_html, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

# play sound on click
us_prompt1 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE
)

# TODO: fix
audio_response1 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("Voice 1", "Voice 2"),
  button_html = random_audio_html,
)

# trial 2
random_US <- sample(random_US_audios, 1)
phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

audio_html <- to_vec(
  for(audio in random_other) 
    paste('<div style="display:inline-block; width:45%; margin: 1%; text-align:center; vertical-align:top;">',
          '<audio controls preload="none" onclick="this.play()">', 
          '<source type="audio/mpeg" src="resource/audio/', audio, '"></audio>',
          '<div style="display:inline-block; padding:10px 20px; background-color:#007BFF; color:white; ',
          'border-radius:6px; cursor:pointer; font-weight:bold;">', audio, '</div></div>', sep="", collapse=NULL)
) 

random_audio_html <- sample(audio_html)
#audio_html <- stringr::str_match(random_audio_html, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

us_prompt2 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE
)

# TODO: fix
audio_response2 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("Voice 1", "Voice 2"),
  button_html = random_audio_html,
)

# trial 3
random_US <- sample(random_US_audios, 1)
phrase <- strsplit(random_US, split="_")[[1]][1]
random_other <- random_other_audios[
  grepl(paste0("^", phrase, "_"), random_other_audios)&
    (grepl(paste0(TR), random_other_audios)|
       grepl(paste0(NZ), random_other_audios))
]

random_US_audios <- random_US_audios[!grepl(paste0("^", phrase, "_"), random_US_audios)]
random_other_audios <- random_other_audios[!grepl(paste0("^", phrase, "_"), random_other_audios)]

audio_html <- to_vec(
  for(audio in random_other) 
    paste('<div style="display:inline-block; width:45%; margin: 1%; text-align:center; vertical-align:top;">',
          '<audio controls preload="none" onclick="this.play()">', 
          '<source type="audio/mpeg" src="resource/audio/', audio, '"></audio>',
          '<div style="display:inline-block; padding:10px 20px; background-color:#007BFF; color:white; ',
          'border-radius:6px; cursor:pointer; font-weight:bold;">', audio, '</div></div>', sep="", collapse=NULL)
) 

random_audio_html <- sample(audio_html)
#audio_html <- stringr::str_match(random_audio_html, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

us_prompt3 <- trial_audio_button_response(
  stimulus = insert_resource(random_US),
  choices = c("Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE
)

# TODO: fix
audio_response3 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("Voice 1", "Voice 2"),
  button_html = random_audio_html,
)

# build part 1
part1 <- build_timeline(us_prompt1, audio_response1, us_prompt2, audio_response2,
  us_prompt3, audio_response3) %>%
  set_parameters(randomize_order = TRUE)

# (4) Finish screen
finish <- trial_html_keyboard_response(
  stimulus = "All done! Press the space button before exiting this window!",
  choices = respond_any_key()
)

# build final experiment
build_experiment(
  timeline = build_timeline(id_part, instructions1, part1, finish),
  path = exp_path,
  resources = build_resources(resource_folder),
  use_webaudio = TRUE,
  on_finish = save_locally()
)

# and run...
run_locally(exp_path)

