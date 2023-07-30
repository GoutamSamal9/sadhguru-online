export interface SurveyInterface {
    id: number;
    activity_ids: number[];
    activity_state: boolean;
    activity_user_id: boolean;
    activity_type_id: boolean;
    activity_type_icon: boolean;
    activity_date_deadline: boolean;
    my_activity_date_deadline: boolean;
    activity_summary: boolean;
    activity_exception_decoration: boolean;
    activity_exception_icon: boolean;
    activity_calendar_event_id: boolean;
    message_is_follower: boolean;
    message_follower_ids: number[];
    message_partner_ids: number[];
    message_ids: number[];
    has_message: boolean;
    message_unread: boolean;
    message_unread_counter: number;
    message_needaction: boolean;
    message_needaction_counter: number;
    message_has_error: boolean;
    message_has_error_counter: number;
    message_attachment_count: number;
    message_main_attachment_id: boolean;
    website_message_ids: number[];
    message_has_sms_error: boolean;
    title: string;
    color: number;
    description: string;
    description_done: string;
    background_image: boolean;
    active: boolean;
    user_id: number; // Tuple type for (number, string)
    question_and_page_ids: number[];
    page_ids: number[];
    question_ids: number[];
    questions_layout: "one_page" | "multiple_pages"; // Update with possible values
    questions_selection: "all" | "specific"; // Update with possible values
    progression_mode: "percent" | "manual"; // Update with possible values
    user_input_ids: number[];
    access_mode: "public" | "private"; // Update with possible values
    access_token: string;
    users_login_required: boolean;
    users_can_go_back: boolean;
    users_can_signup: boolean;
    answer_count: number;
    answer_done_count: number;
    answer_score_avg: number;
    answer_duration_avg: number;
    success_count: number;
    success_ratio: number;
    scoring_type: "no_scoring" | "simple_scoring"; // Update with possible values
    scoring_success_min: number;
    is_attempts_limited: boolean;
    attempts_limit: number;
    is_time_limited: boolean;
    time_limit: number;
    certification: boolean;
    certification_mail_template_id: boolean;
    certification_report_layout: "modern_purple" | string; // Update with possible values
    certification_give_badge: boolean;
    certification_badge_id: boolean;
    certification_badge_id_dummy: boolean;
    session_state: boolean;
    session_code: string;
    session_link: string;
    session_question_id: boolean;
    session_start_time: boolean;
    session_question_start_time: boolean;
    session_answer_count: number;
    session_question_answer_count: number;
    session_show_leaderboard: boolean;
    session_speed_rating: boolean;
    has_conditional_questions: boolean;
    __last_update: string;
    display_name: string;
    create_uid: number;
    create_date: string;
    write_uid: number;
    write_date: string;
    no_attempts_left_redirect_url: boolean;
    is_page_time_limited_in: boolean;
    page_time_limit_in: number;
    team_id: boolean;
    center_id: number;
    questions_txn_field_mapping_ids: number[];
    custom_template: string;
    event_id: boolean;
    event_type_id: boolean;
    mandatory_question_ids: number[];
  }
  