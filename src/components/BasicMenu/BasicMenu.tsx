import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface Props {
  goToSlide: (index: number) => void;
}

export default function BasicMenu({ goToSlide }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <MenuItem onClick={() => goToSlide(0)}>
          <a href="#" style={{ color: "black" }}>
            ЛЕКЦИИ
          </a>
        </MenuItem>
        <MenuItem onClick={() => goToSlide(1)}>
          <a href="#" style={{ color: "black" }}>
            ПРАКТИКА
          </a>
        </MenuItem>
        <MenuItem onClick={() => goToSlide(2)}>
          <a href="#" style={{ color: "black" }}>
            ВИДЕОУРОКИ
          </a>
        </MenuItem>
        <MenuItem onClick={() => goToSlide(3)}>
          <a href="#" style={{ color: "black" }}>
            ГАЛЕРЕЯ
          </a>
        </MenuItem>
        <MenuItem onClick={() => goToSlide(4)}>
          <a href="#" style={{ color: "black" }}>
            ТЕСТЫ
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
