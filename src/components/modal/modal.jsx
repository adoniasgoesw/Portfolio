import { Eye, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import Button from "../buttons/Button";
import { FaGithub } from "react-icons/fa";

export default function Modal({ open, onClose, project }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!open) return null;

  const textClass = isDark ? "text-light-quaternary" : "text-dark-quaternary";

  const handleOpenLink = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[99] h-[100vdh]">
      {/* Backdrop */}
      <button
        aria-label="Close project modal backdrop"
        onClick={() => onClose?.()}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
      />

      {/* Panel */}
      <div
        className={[
          "absolute top-0 right-0 bottom-0 h-[100vdh]",
          "w-full sm:w-[380px] md:w-[420px] lg:w-[480px]",
          "p-6 shadow-xl flex flex-col",
          isDark ? "bg-dark-quaternary/95" : "bg-white/95",
        ].join(" ")}
      >
        {/* Header */}
        <div className="w-full flex justify-end">
          <Button
            variant="icon"
            icon={X}
            onClick={() => onClose?.()}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 mt-4 flex-1 overflow-y-auto">
          
          {/* Image */}
          <div className="w-full h-56 bg-light-secondary rounded-xl overflow-hidden border-5">
            <img
              src={project?.image}
              alt={project?.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <p className={[textClass, "uppercase text-xs tracking-widest opacity-70"].join(" ")}>
            Project {project?.id ? String(project.id).padStart(2, "0") : ""}
          </p>

          <h3 className={[textClass, "text-2xl font-bold"].join(" ")}>
            {project?.name}
          </h3>

          <p className={[textClass, "text-sm opacity-90"].join(" ")}>
            {project?.desc}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project?.skills?.map((skill, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-light-secondary text-dark-quaternary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="w-full flex gap-3 mt-6">
          <Button
            variant="secondary"
            icon={Eye}
            text="Preview Project"
            className="w-full"
            onClick={() => handleOpenLink(project?.link)}
          />

          <Button
            variant="outlineSecondary"
            icon={FaGithub}
        
            onClick={() => handleOpenLink(project?.github)}
          />
        </div>
      </div>
    </div>
  );
}