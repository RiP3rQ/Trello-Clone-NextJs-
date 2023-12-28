import { Footer } from "@/app/(marketing)/_components/footer";
import { Navbar } from "@/app/(marketing)/_components/navbar";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Layout Elements of Landing Page", () => {
  describe("Rendering", () => {
    it("should have a Navbar component with logo and 2 buttons", () => {
      render(<Navbar />);

      expect(screen.getByTestId("navbar_wrapper")).toBeInTheDocument();

      expect(screen.getByTestId("logo")).toBeInTheDocument();
      expect(screen.getByTestId("logo")).toHaveTextContent("Taskify");

      expect(screen.getByTestId("navbar_login_button")).toBeInTheDocument();
      expect(screen.getByTestId("navbar_login_button")).toHaveTextContent(
        "Login"
      );
      expect(
        screen.getByTestId("navbar_login_button").closest("a")
      ).toHaveAttribute("href", "/sign-in");

      expect(
        screen.getByTestId("navbar_get_taskify_button")
      ).toBeInTheDocument();
      expect(screen.getByTestId("navbar_get_taskify_button")).toHaveTextContent(
        "Get Taskify for free"
      );
      expect(
        screen.getByTestId("navbar_get_taskify_button").closest("a")
      ).toHaveAttribute("href", "/sign-up");
    });

    it("should have a Footer component with logo and 2 buttons", () => {
      render(<Footer />);

      expect(screen.getByTestId("footer_wrapper")).toBeInTheDocument();

      expect(screen.getByTestId("logo")).toBeInTheDocument();
      expect(screen.getByTestId("logo")).toHaveTextContent("Taskify");

      expect(screen.getByTestId("footer_policy_button")).toBeInTheDocument();
      expect(screen.getByTestId("footer_policy_button")).toHaveTextContent(
        "Privacy Policy"
      );
      expect(screen.getByTestId("footer_policy_button")).toBeEnabled();

      expect(screen.getByTestId("footer_terms_button")).toBeInTheDocument();
      expect(screen.getByTestId("footer_terms_button")).toHaveTextContent(
        "Terms of Service"
      );
      expect(screen.getByTestId("footer_terms_button")).toBeEnabled();
    });
  });
});
