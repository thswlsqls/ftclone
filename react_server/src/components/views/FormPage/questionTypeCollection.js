import { AlignLeftOutlined, AppstoreFilled, BankFilled, BoxPlotFilled, BuildFilled, CalendarFilled, CheckOutlined, CreditCardFilled, DownOutlined, FolderFilled, GroupOutlined, LinkOutlined, MailFilled, MessageOutlined, NumberOutlined, PhoneFilled, PictureFilled, SignalFilled, StarFilled } from "@ant-design/icons";

const questionTypeCollection = [
    {
        data_qa: "block-list-item-welcome-screen",
        data_block_type: "welcome-screen",
        data_qa_pointer: "welcome-screen-card",
        className: "gyWuhD",
        type: "Welcome Screen",
        discription: "Invite your audience in",
        icon: <BoxPlotFilled />	
    },
    {
        data_qa: "block-list-item-multiple_choice",
        data_block_type: "multiple_choice",
        data_qa_pointer: "multiple_choice-card",
        className: "gWJIGk",
        type: "Multiple Choice",
        discription: "Give people clear options",	
        icon: <CheckOutlined />
    },
    {
        data_qa: "block-list-item-phone_number",
        data_block_type: "phone_number",
        data_qa_pointer: "phone_number-card",
        className: "jVFeHP",
        type: "Phone Number",
        discription: "Formatted with the country code",
        icon: <PhoneFilled />
    },
   {
        data_qa: "block-list-item-short_text",
        data_block_type: "short_text",
        data_qa_pointer: "short_text-card",
        className: "dKocFO",
        type: "Short Text",
        discription: "For short answers, like names",
        icon: <AlignLeftOutlined />	
    },
    {
        data_qa: "block-list-item-long_text",
        data_block_type: "long_text",
        data_qa_pointer: "long_text-card",
        className: "bKnlxx",
        type: "Long Text",
        discription: "More space to spill the beans",	
        icon: <AlignLeftOutlined />
    },
    {
        data_qa: "block-list-item-statement",
        data_block_type: "statement",
        data_qa_pointer: "statement-card",
        className: "gplBLQ",
        type: "Statement",
        discription: "Take the mic for a moment",
        icon: <MessageOutlined />
    },
    {
        data_qa: "block-list-item-picture_choice",
        data_block_type: "picture_choice",
        data_qa_pointer: "picture_choice-card",
        className: "gfhJNl",
        type: "Picture Choice",
        discription: "Multiple choice but prettier",
        icon: <PictureFilled />	
    },
    {
        data_qa: "block-list-item-ranking",
        data_block_type: "ranking",
        data_qa_pointer: "ranking-card",
        className: "IyOBq",
        type: "Ranking",
        discription: "Order items by preference",
        icon: <SignalFilled />	
    },
    {
        data_qa: "block-list-item-yes_no",
        data_block_type: "yes_no",
        data_qa_pointer: "yes_no-card",
        className: "gfhJNl",
        type: "Yes/No",
        discription: "Just 2 options: Yes or No",
        icon: <BuildFilled />	
    },
    {
        data_qa: "block-list-item-email",
        data_block_type: "email",
        data_qa_pointer: "email-card",
        className: "jGscRv",
        type: "Email",
        discription: "Ask for an email address",
        icon: <MailFilled />	
    },
    {
        data_qa: "block-list-item-opinion_scale",
        data_block_type: "opinion_scale",
        data_qa_pointer: "opinion_scale-card",
        className: "gLgicz",
        type: "Opinion Scale",
        discription: "A customizable, numbered scale",
        icon: <SignalFilled />		
    },
    {
        data_qa: "block-list-item-rating",
        data_block_type: "rating",
        data_qa_pointer: "rating-card",
        className: "fLKpEG",
        type: "Rating",
        discription: "Choose from shapes like ⭐ or 🐶",
        icon: <StarFilled />	
    },
    {
        data_qa: "block-list-item-matrix",
        data_block_type: "matrix",
        data_qa_pointer: "matrix-card",
        className: "dEzQgT",
        type: "Matrix",
        discription: "Rate a list of items",
        icon: <AppstoreFilled />		
    },
    {
        data_qa: "block-list-item-date",
        data_block_type: "date",
        data_qa_pointer: "date-card",
        className: "inQRrG",
        type: "Date",
        discription: "Collect answers in date format",
        icon: <CalendarFilled />	
    },
    {
        data_qa: "block-list-item-number",
        data_block_type: "number",
        data_qa_pointer: "number-card",
        className: "hlngXD",
        type: "Number",
        discription: "For quantities, not zip codes",
        icon: <NumberOutlined />		
    },
    {
        data_qa: "block-list-item-dropdown",
        data_block_type: "dropdown",
        data_qa_pointer: "dropdown-card",
        className: "gWJIGk",
        type: "Dropdown",
        discription: "For long lists of options",
        icon: <DownOutlined />			
    },
    {
        data_qa: "block-list-item-legal",
        data_block_type: "legal",
        data_qa_pointer: "legal-card",
        className: "IyOBq",
        type: "Legal",
        discription: "Ask people to accept something",
        icon: <BankFilled />				
    },
    {
        data_qa: "block-list-item-file_upload",
        data_block_type: "file_upload",
        data_qa_pointer: "file_upload-card",
        className: "gYHlhh",
        type: "File Upload",
        discription: "Upload a file up to 10MB",
        icon: <FolderFilled />				
    },
    {
        data_qa: "block-list-item-payment",
        data_block_type: "payment",
        data_qa_pointer: "payment-card",
        className: "gvPEXR",
        type: "Payment",
        discription: "Collect payments via Stripe",
        icon: <CreditCardFilled />	
    },
    {
        data_qa: "block-list-item-website",
        data_block_type: "website",
        data_qa_pointer: "website-card",
        className: "dKocFO",
        type: "Website",
        discription: "Check for a valid URL",
        icon: <LinkOutlined />	
    },
    {
        data_qa: "block-list-item-group",
        data_block_type: "group",
        data_qa_pointer: "group-card",
        className: "gplBLQ",
        type: "Question Group",
        discription: "Group related questions together"	,
        icon: <GroupOutlined />      
    }
]

export default questionTypeCollection