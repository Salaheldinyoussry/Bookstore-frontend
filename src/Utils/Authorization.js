import React from "react";
import Unauthorized from "views/Unauthorized";
import routes from "../routes";
import { getRole } from "../Utils/Common";

const DESIGNER_ALLOWED_PATHS = ["templates", "assets", "campaign"];
const MARKETING_NOT_ALLOWED_PATHES = ["users"];

const DEVELOPER_ALLOWED_PATHS = [
  "/templates",
  "/assets",
  "/workflow",
  "/companyApps",
  "/all_apps",
  "/app_config",
];

const COMPLIANCE_ALLOWED_PATHS = ["templates", "campaign"];

const ADMIN_ROLE = "admin";
const DESIGNER = "designer";
const MARKETING_ROLE = "marketing";
const DEVELOPER_ROLE = "developer";
const COMPLIANCE_ROLE = "compliance";

export const validateRoutesByRole = (routes) => {
  let role = getRole();

  let newRoutes = [];
  routes.forEach((obj) => {
    let component = validatePathAccordingToRole(obj.path, obj.component);
    var obj = {
      path: obj.path,
      component: component,
      name: obj.name,
      layout: obj.layout,
    };
    newRoutes.push(obj);
  });
  console.log(role);
  return newRoutes;
};

export const evaluateAccessibility = (path, jsx) => {
  let role = getRole();

  if (role == ADMIN_ROLE) return jsx;
  if (role == DESIGNER) {
    if (allowDesigner(path)) return jsx;
  }
  if (role == MARKETING_ROLE) {
    if (allowMarketing(path)) return jsx;
  }
  if (role == DEVELOPER_ROLE) {
    if (allowDeveloper(path)) return jsx;
  }
  if (role == COMPLIANCE_ROLE) {
    if (allowCompliance(path)) return jsx;
  }

  return "";
};
export const getRoutes = () => {
  let role = getRole();

  let r = validatePathAccordingToRole(routes);
  return r;
};

export const getFirstPagePath = (role) => {
  console.log("role...", role);
  //   let role = useGetRole();

  if (role) {
    if (role == ADMIN_ROLE) return "/admin/dashboard";
    if (role == DESIGNER || role == DEVELOPER_ROLE)
      return "/admin/templates/all_templates";
    if (role == COMPLIANCE_ROLE) return "/admin/campaign/all";
    if (role == MARKETING_ROLE) return "/admin/accounts/all";
    return "admin/dashboard";
  }
};

const validatePathAccordingToRole = (path, component) => {
  let role = getRole();

  if (role == ADMIN_ROLE) return component;
  if (role == DESIGNER) {
    if (allowDesigner(path)) return component;
  }
  if (role == MARKETING_ROLE) {
    if (allowMarketing(path)) return component;
  }
  if (role == DEVELOPER_ROLE) {
    if (allowDeveloper(path)) return component;
  }
  if (role == COMPLIANCE_ROLE) {
    if (allowCompliance(path)) return component;
  }

  return Unauthorized;
};
function allowMarketing(path) {
  var flag = true;
  MARKETING_NOT_ALLOWED_PATHES.forEach((p2) => {
    if (path.includes(p2)) flag = false;
  });
  return flag;
}

function allowDesigner(path) {
  var flag = false;
  DESIGNER_ALLOWED_PATHS.forEach((p2) => {
    if (path.includes(p2)) flag = true;
  });
  return flag;
}
function allowDeveloper(path) {
  var flag = false;
  DEVELOPER_ALLOWED_PATHS.forEach((p2) => {
    if (path.includes(p2)) flag = true;
  });
  return flag;
}
function allowCompliance(path) {
  var flag = false;
  COMPLIANCE_ALLOWED_PATHS.forEach((p2) => {
    if (path.includes(p2)) flag = true;
  });
  return flag;
}
