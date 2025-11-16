import React from "react";
import {
  Claude,
  DeepSeek,
  Gemini,
  Qwen,
  OpenAI,
  Grok,
  OpenRouter,
} from "@lobehub/icons";

const AISkill = () => {
  return (
    <div className="mt-10">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" text-xs sm:text-sm font-semibold text-blue-600 mb-2 tracking-wide animate-fadeIn">
          ARTIFICIAL INTELLIGENCE SKILLS
        </div>
        <h2 className=" text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 animate-fadeIn">
          A.I. Skills For New Era Development
        </h2>
      </div>
      <div className="w-full flex justify-center p-4">
        <div
          className="bg-white shadow-lg shadow-blue-100 rounded-2xl border border-blue-100 p-6 
                  max-w-xl w-full
                  flex flex-wrap justify-center gap-6 
                  hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex flex-col items-center">
            <Claude.Combine size={56} type={"color"} />
            <p className="text-sm text-blue-600 font-medium mt-2">Claude</p>
          </div>

          <div className="flex flex-col items-center">
            <DeepSeek.Combine size={64} type={"color"} />
            <p className="text-sm text-blue-600 font-medium mt-2">DeepSeek</p>
          </div>

          <div className="flex flex-col items-center">
            <Qwen.Combine size={56} type={"color"} />
            <p className="text-sm text-blue-600 font-medium mt-2">Qwen</p>
          </div>

          <div className="flex flex-col items-center">
            <Gemini.Combine size={56} type={"color"} />
            <p className="text-sm text-blue-600 font-medium mt-2">Gemini</p>
          </div>

          <div className="flex flex-col items-center">
            <OpenAI.Combine size={64} extra={"ChatGPT"} showText={false} />
            <p className="text-sm text-blue-600 font-medium mt-2">ChatGPT</p>
          </div>

          <div className="flex flex-col items-center">
            <Grok.Combine size={64} />
            <p className="text-sm text-blue-600 font-medium mt-2">Grok</p>
          </div>

          <div className="flex flex-col items-center">
            <OpenRouter.Combine size={44} />
            <p className="text-sm text-blue-600 font-medium mt-2">OpenRouter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISkill;
