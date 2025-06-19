import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export default function MenuForPages() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "white" }}
      >
        МЕНЮ
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={() => navigate("/lecture-page")}>
          <a href="#" style={{ color: "black" }}>
            ЛЕКЦИИ
          </a>
        </MenuItem>
        <MenuItem onClick={() => navigate("/practice-page")}>
          <a href="#" style={{ color: "black" }}>
            ПРАКТИКА
          </a>
        </MenuItem>
        <MenuItem onClick={() => navigate("/video-page")}>
          <a href="#" style={{ color: "black" }}>
            ВИДЕОУРОКИ
          </a>
        </MenuItem>
        <MenuItem onClick={() => navigate("/gallery-page")}>
          <a href="#" style={{ color: "black" }}>
            ГАЛЕРЕЯ
          </a>
        </MenuItem>
        <MenuItem onClick={() => navigate("/test-page")}>
          <a href="#" style={{ color: "black" }}>
            ТЕСТЫ
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
