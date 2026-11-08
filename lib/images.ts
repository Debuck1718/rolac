/**
 * Central library of ROLAC company photos.
 *
 * All images live in `public/photos` and come straight from ROLAC's own
 * archive: language-laboratory installations, the National Oral French Quiz
 * launch, awards and recognition, and community work. Use these constants
 * instead of hardcoding `/photos/...` paths so references stay in sync with
 * the actual files on disk.
 */

const base = "/photos";

export const images = {
  /** CEO interview with GTV during a lab installation in the Upper West Region */
  gtvInterview: `${base}/an_image_of_interview_of_the_CEO_with_GTV_during_installation_at_the_upper_west_region_of_Ghana_and_talking_about_the_importance_of_it.jpeg`,

  /** ROLAC award — Champion of Francophone Education & Cultural Exchange */
  ghanaDevelopmentAward: `${base}/Award_presented_to_rolac_on_champion_of_Francophone_education_and_cultural_exchange_for_development_at_the_3rd_edition_of_Ghana_Development_awards.jpeg`,

  /** CEO receiving an award at the Africa Global Trade & Investment conference */
  ceoAward: `${base}/Award_presented_to_the_CEO_at_the_Africa_Global_Trade_and_Investment_conference_awards.jpeg`,

  /** CEO speech at the National Oral French Quiz launch, British Council */
  quizLaunchSpeech: `${base}/CEO's_speech_at_the_launch_of_the_national_french_oral _quiz_at _the_british_council.jpeg`,

  /** Congratulations flyer from the Ghana Development Conference & Awards */
  congratulationsFlyer: `${base}/congratulations_flyer_to_Rosa's_language_at_the_3rd_edition_of_Ghana_development_conference_and_awards_2026_at_La_Palm_Royal_Beach_hotel.jpeg`,

  /** Education Minister Dr Yaw Osei Adutwum speaking at the 2018 quiz launch */
  educationMinister: `${base}/education_minister_dr yaw_adutum_at_the_launch_of_the_national_french_oral_quiz_in_2018_speech_at_the_ceremony_image.jpeg`,

  /** Newspaper coverage of the National Oral French Quiz launch */
  newspaperPublication: `${base}/newspaper_publication_of_the_national_oral_french_quiz_launch.jpeg`,

  /** Language laboratory installation at Amansie West District */
  labAmansieWest: `${base}/installation_at_Amansie_west_district.jpeg`,

  /** Language laboratory installation at Mampong Municipal */
  labMampong: `${base}/installation_at_Mampong_municipal.jpeg`,

  /** Language laboratory installation at Prempeh College */
  labPrempeh: `${base}/installation_at_Prempeh_college.jpeg`,

  /** Language laboratory installation at St Joseph's Seminary */
  labStJoseph: `${base}/installation_at_St_Joseph's_Seminary.jpeg`,

  /** Language laboratory installation at St Monica's SHS */
  labStMonica: `${base}/installation_at_St_Monica's_shs.jpeg`,

  /** Language laboratory installation at St Xavier Seminary (video still / video) */
  labStXavierVideo: `${base}/installation_at_st_xavier_seminary.mp4`,

  /** Lab installation in Sefwi Bode Roman school (video) */
  labSefwiVideo: `${base}/installation_at_Sefwi_Bode_Roman_school.mp4`,

  /** French lab installation at Amansie West (video) */
  labAmansieVideo: `${base}/french_lab_installation_at_Amansie_west.mp4`,

  /** French teachers training registration in Sefwi (video) */
  teachersTrainingSefwiVideo: `${base}/french_teachers_training_registration_in_Sefwi.mp4`,

  /** ROLAC team field work during a laboratory donation (video) */
  teamDonationVideo: `${base}/rolac_team_work_on_field_of_donation.mp4`,

  /** Donation of language labs at Wa (video) */
  donationWaVideo: `${base}/three_donations_lab_at_wa.mp4`,



  /** Headteacher training session at Yaa Asantewaa SHS (video) */
  headteachersTrainingVideo: `${base}/training_headteachers_at_Yaa_asantewaa_shs.mp4`,

  /** Canal+ recognition for promoting French studies in Ghana (video) */
  canalPlusVideo: `${base}/recognition_from_canal_plus_for_the_promotion_of_french_studies_in_Ghana_during_their_30yrs_aniversary_in_Ghana.mp4`,

  /** Headmistress of Amaniampong thanking ROLAC after receiving a lab (video) */
  amaniampongThanksVideo: `${base}/appreciation_from_Amaniampong_headmistress_after_recieving_frenchlaboritory_.mp4`,

  /** A satisfied district director's acknowledgement (video) */
  districtDirectorVideo: `${base}/acknowledgement_from_satisfied_district_director.mp4`,

  /**" — end of archive */

  /** Team receiving an award on stage */
  teamAward: `${base}/Team_recieving_award.jpeg`,

  /** Students in a ROLAC learning session (legacy image) */
  students: `${base}/students-alt.webp`,
} as const;

export type RolacImage = keyof typeof images;
