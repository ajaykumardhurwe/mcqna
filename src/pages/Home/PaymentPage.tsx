// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// // Sample data for the plans
// const plans = [
//   {
//     id: 1,
//     title: "Basic Plan",
//     description: "A perfect plan for small businesses and startups.",
//     price: "$199",
//     features: [
//       "🌐 Domain & Hosting Free for 1 Year",
//       "🔒 Free Valid SSL Certificate",
//       "📄 6-10 Pages (Depends on Plan)",
//       "💬 WhatsApp Integration",
//       "📱 Responsive for Mobile/Tablet",
//       "📧 Free Professional Emails",
//       "🛠️ Admin Panel",
//       "🌟 SEO Friendly",
//       "📲 Social Media Integration",
//       "🎨 Logo Design",
//       "📊 Website Visitor Counter",
//       "🛡️ 12 Months Free Support",
//     ],
//   },
//   {
//     id: 2,
//     title: "Pro Plan",
//     description: "Advanced features for growing businesses.",
//     price: "$399",
//     features: [
//       "🌐 Domain & Hosting Free for 1 Year",
//       "🔒 Free Valid SSL Certificate",
//       "📄 6-10 Pages (Depends on Plan)",
//       "💬 WhatsApp Integration",
//       "📱 Responsive for Mobile/Tablet",
//       "📧 Free Professional Emails",
//       "🛠️ Advanced Admin Panel",
//       "🌟 Enhanced SEO Optimization",
//       "📲 Social Media Integration",
//       "🎨 Premium Logo Design",
//       "📊 Advanced Website Visitor Analytics",
//       "🛡️ 12 Months Free Support",
//     ],
//   },
//   {
//     id: 3,
//     title: "Premium Plan",
//     description: "All-in-one solution for large-scale businesses.",
//     price: "$599",
//     features: [
//       "🌐 Domain & Hosting Free for 1 Year",
//       "🔒 Free Valid SSL Certificate",
//       "📄 6-10 Pages (Customizable)",
//       "💬 WhatsApp Integration",
//       "📱 Highly Responsive for All Devices",
//       "📧 Multiple Professional Emails",
//       "🛠️ Custom Admin Panel",
//       "🌟 Advanced SEO Friendly",
//       "📲 Social Media Campaign Integration",
//       "🎨 Premium Logo & Branding",
//       "📊 Website Visitor Counter with Analytics",
//       "🛡️ 12 Months Premium Support",
//     ],
//   },
// ];

// const PaymentPage = () => {
//   const { planId } = useParams<{ planId: string }>(); // Get the planId from the URL
//   const [plan, setPlan] = useState<any>(null);
//   const navigate = useNavigate();

//   // Find the selected plan based on planId from the URL
//   useEffect(() => {
//     const selectedPlan = plans.find((p) => p.id.toString() === planId);
//     if (selectedPlan) {
//       setPlan(selectedPlan);
//     } else {
//       navigate("/"); // Navigate to Home if the plan doesn't exist
//     }
//   }, [planId, navigate]);

//   // Handle proceed to payment
//   const handleProceedToPayment = () => {
//     // Here you would typically initiate a payment process
//     alert("Proceeding to payment... (This is a mock payment)");
//     // After payment, you can navigate to a payment success or confirmation page
//     navigate("/payment-success");
//   };

//   if (!plan) {
//     return <div>Loading...</div>; // Handle loading state while data is fetched
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">{plan.title}</h1>
//         <p className="text-lg text-gray-700 text-center mb-6">{plan.description}</p>
//         <div className="space-y-4 mb-6">
//           <h3 className="text-2xl font-semibold">Features:</h3>
//           <ul className="text-sm text-gray-600 space-y-2">
//             {plan.features.map((feature: string, index: number) => (
//               <li key={index} className="flex items-center">
//                 ✅ {feature}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="text-3xl font-semibold text-green-600 mb-6 text-center">
//           Price: {plan.price}
//         </div>

//         <div className="flex justify-center">
//           <button
//             onClick={handleProceedToPayment}
//             className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Proceed to Payment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;



































import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Card data
const cards = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$199",
    paymentRoute: "/payment/basic",
  },
  {
    id: 2,
    title: "Pro Plan",
    price: "$399",
    paymentRoute: "/payment/pro",
  },
  {
    id: 3,
    title: "Premium Plan",
    price: "$599",
    paymentRoute: "/payment/premium",
  },
  {
    id: 4,
    title: "Basic App Plan",
    price: "$199",
    paymentRoute: "/app/payment/basic",
  },
  {
    id: 5,
    title: "Medium Plan",
    price: "$399",
    paymentRoute: "/app/payment/medium",
  },
  {
    id: 6,
    title: "Pro App Plan",
    price: "$599",
    paymentRoute: "/app/payment/pro",
  },
];

const PaymentPage: React.FC = () => {
  const { planId } = useParams<{ planId: string }>();
  const navigate = useNavigate();

  const selectedPlan = cards.find((card) => card.paymentRoute.includes(planId || ""));

  if (!selectedPlan) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-red-600">Plan Not Found</h2>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedPlan.title}</h2>
        <p className="text-xl text-gray-700 mb-4">Price: {selectedPlan.price}</p>
        
        {/* <button
          className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
          onClick={() => alert("Payment processing...")}
        >
          Proceed to Payment
        </button> */}

<button
  className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
  onClick={() => window.location.href = "https://www.instamojo.com/@ajaydhurwe_tech/l52421df2a8424c48be5e03a0916898dc/"}
>
  Proceed to Payment
</button>


      </div>
    </div>
  );
};

export default PaymentPage;

























