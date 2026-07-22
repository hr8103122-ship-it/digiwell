export const studentMockData = {
  profile: {
    name: "Rahul Sharma",
    course: "SSC CGL",
    batch: "SSC CGL 2026 - Golden Batch A",
    rollNo: "DW2026CGL042",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    joinDate: "Jan 15, 2026",
    mentor: "Dr. Vivek Chawla",
    avatar: "/images/rahul.jpg", // Fallback text avatar will be used
    progress: 72, // overall course progress %
    achievements: 4,
    level: "Pro Learner",
    address: "123, Sector 15, Dwarka, New Delhi - 110075",
    bloodGroup: "O+",
    dob: "August 12, 2001"
  },
  attendance: {
    overall: 92,
    totalClasses: 120,
    attended: 110.4, // rounded to 110 in UI if needed
    absent: 10,
    status: "Excellent",
    monthly: [
      { month: "Jan", percentage: 90, classes: 20 },
      { month: "Feb", percentage: 95, classes: 24 },
      { month: "Mar", percentage: 91, classes: 26 },
      { month: "Apr", percentage: 93, classes: 25 },
      { month: "May", percentage: 92, classes: 25 }
    ],
    subjectWise: [
      { subject: "Quantitative Aptitude", attended: 28, total: 30, percentage: 93 },
      { subject: "Reasoning Ability", attended: 29, total: 30, percentage: 96 },
      { subject: "English Comprehension", attended: 26, total: 30, percentage: 86 },
      { subject: "General Awareness", attended: 27, total: 30, percentage: 90 }
    ]
  },
  fees: {
    status: "Pending",
    amountPending: 8000,
    amountPaid: 16000,
    totalAmount: 24000,
    dueDate: "August 05, 2026",
    nextInstallment: "₹8,000",
    history: [
      { id: "TXN-1082", date: "Jan 16, 2026", amount: 8000, method: "UPI / GPay", status: "Successful", receipt: "#REC-1082" },
      { id: "TXN-2495", date: "April 10, 2026", amount: 8000, method: "Credit Card", status: "Successful", receipt: "#REC-2495" }
    ]
  },
  performance: {
    overall: 84,
    grade: "A",
    rank: "14 / 120",
    percentile: "91st Percentile",
    monthlyTests: [
      { name: "Mock Test 1", score: 72, date: "Feb 10" },
      { name: "Mock Test 2", score: 78, date: "Mar 10" },
      { name: "Mock Test 3", score: 82, date: "Apr 10" },
      { name: "Mock Test 4", score: 84, date: "May 10" },
      { name: "Mock Test 5", score: 88, date: "Jun 10" }
    ],
    subjectProgress: [
      { subject: "Quantitative Aptitude", score: 80, color: "#1d6f42" },
      { subject: "Reasoning Ability", score: 88, color: "#f7b733" },
      { subject: "English Comprehension", score: 85, color: "#3154a3" },
      { subject: "General Awareness", score: 78, color: "#6844a8" }
    ]
  },
  upcomingClasses: [
    {
      id: "cls-1",
      subject: "Reasoning Ability",
      topic: "Syllogism & Venn Diagrams - Part 2",
      teacher: "Vivek Sir",
      time: "10:00 AM",
      date: "Tomorrow",
      duration: "1.5 Hrs",
      isLive: true,
      roomCode: "REAS-LIVE-902"
    },
    {
      id: "cls-2",
      subject: "Quantitative Aptitude",
      topic: "Compound Interest Shortcuts",
      teacher: "Rakesh Sir",
      time: "02:00 PM",
      date: "July 24, 2026",
      duration: "2 Hrs",
      isLive: true,
      roomCode: "MATH-LIVE-411"
    },
    {
      id: "cls-3",
      subject: "English Comprehension",
      topic: "Reading Comprehension Strategy",
      teacher: "Anjali Ma'am",
      time: "11:30 AM",
      date: "July 25, 2026",
      duration: "1 Hr",
      isLive: false,
      roomCode: "ENG-REC-884"
    }
  ],
  assignments: [
    {
      id: "asg-1",
      title: "Quantitative Aptitude Worksheet 5",
      subject: "Quantitative Aptitude",
      dueDate: "Today, 11:59 PM",
      status: "Pending",
      isUrgent: true,
      description: "Complete questions 1 to 30 on Profit & Loss and Compound Interest from the shared PDF resource."
    },
    {
      id: "asg-2",
      title: "Reasoning Practice Set 4",
      subject: "Reasoning Ability",
      dueDate: "July 25, 2026",
      status: "Pending",
      isUrgent: false,
      description: "Solve the logical puzzle sheet on Circular Seating Arrangements. 15 questions."
    },
    {
      id: "asg-3",
      title: "English Grammar Test 2",
      subject: "English Comprehension",
      dueDate: "Submitted",
      status: "Graded",
      grade: "A (90/100)",
      score: "90%",
      feedback: "Great command of Active/Passive rules. Watch out for complex prepositions."
    },
    {
      id: "asg-4",
      title: "General Awareness Quiz 3",
      subject: "General Awareness",
      dueDate: "Submitted",
      status: "Submitted",
      grade: "Pending Review",
      score: "Waiting",
      feedback: "The teacher is grading this assignment."
    }
  ],
  notices: [
    {
      id: "ntc-1",
      title: "All-India CGL Full Mock Test Scheduled",
      content: "The monthly full-length mock test (200 Marks) is scheduled for Sunday, July 26, 2026. The window will open at 9:00 AM and close at 6:00 PM. Attendance is compulsory for all Golden Batch students.",
      date: "July 21, 2026",
      tag: "Exam",
      isNew: true,
      sender: "Exam Controller"
    },
    {
      id: "ntc-2",
      title: "Special Workshop: Speed Math Shortcuts",
      content: "Rakesh Sir is hosting a live bonus session on 'Vedica Speed Math & Fast Multiplication Tricks' on July 23, 2026, from 4:00 PM to 5:30 PM. Zoom link will be shared 15 minutes before the start.",
      date: "July 20, 2026",
      tag: "Workshop",
      isNew: true,
      sender: "Admin Office"
    },
    {
      id: "ntc-3",
      title: "Doubt Counter Timings Revised",
      content: "The offline doubt counters at the Dwarka center will now be operational from 8:00 AM to 8:00 PM (Monday to Saturday) to help students with high-intensity practice rounds.",
      date: "July 18, 2026",
      tag: "General",
      isNew: false,
      sender: "Center Manager"
    }
  ],
  recentActivities: [
    {
      id: "act-1",
      type: "assignment_submit",
      title: "Submitted English Grammar Test 2",
      time: "2 hours ago",
      details: "File 'rahul_sharma_eng_g2.pdf' successfully uploaded."
    },
    {
      id: "act-2",
      type: "class_attend",
      title: "Attended Quantitative Aptitude Class",
      time: "Yesterday, 2:00 PM",
      details: "Participated in compound interest shortcuts live discussion. Duration: 1h 45m."
    },
    {
      id: "act-3",
      type: "fee_payment",
      title: "Fee Payment Successful",
      time: "July 10, 2026",
      details: "Received confirmation for ₹8,000 (Installment 2) - Receipt Rec-2495."
    },
    {
      id: "act-4",
      type: "mock_test",
      title: "Completed Mock Test 4",
      time: "May 10, 2026",
      details: "Scored 84% in the full length CGL Mock Exam."
    }
  ],
  courses: [
    {
      id: "course-qa",
      name: "Quantitative Aptitude",
      teacher: "Rakesh Sir",
      completedLessons: 32,
      totalLessons: 45,
      attendance: 93,
      progress: 71,
      nextClass: "July 24, 2:00 PM",
      schedule: "Mon, Wed, Fri"
    },
    {
      id: "course-ra",
      name: "Reasoning Ability",
      teacher: "Vivek Sir",
      completedLessons: 28,
      totalLessons: 36,
      attendance: 96,
      progress: 77,
      nextClass: "Tomorrow, 10:00 AM",
      schedule: "Tue, Thu, Sat"
    },
    {
      id: "course-ec",
      name: "English Comprehension",
      teacher: "Anjali Ma'am",
      completedLessons: 24,
      totalLessons: 40,
      attendance: 86,
      progress: 60,
      nextClass: "July 25, 11:30 AM",
      schedule: "Tue, Thu"
    },
    {
      id: "course-ga",
      name: "General Awareness",
      teacher: "Manoj Sir",
      completedLessons: 40,
      totalLessons: 50,
      attendance: 90,
      progress: 80,
      nextClass: "Weekly Assessment",
      schedule: "Mon, Fri"
    }
  ],
  certificates: [
    {
      id: "cert-1",
      title: "Course Enrollment Certificate",
      category: "Official",
      issuedOn: "January 16, 2026",
      credentialId: "DW-CGL-2026-042A",
      status: "Issued",
      fileUrl: "#"
    },
    {
      id: "cert-2",
      title: "Intermediate Reasoning Assessment",
      category: "Academic",
      issuedOn: "March 12, 2026",
      credentialId: "DW-REAS-INT-309",
      status: "Issued",
      fileUrl: "#"
    },
    {
      id: "cert-3",
      title: "Full Course Completion Certificate",
      category: "Official",
      issuedOn: "Pending Graduation",
      credentialId: "DW-CGL-FULL-PENDING",
      status: "Locked",
      fileUrl: null
    }
  ]
};
