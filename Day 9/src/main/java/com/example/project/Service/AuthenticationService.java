package com.example.project.Service;
import com.example.project.DTO.Request.SignInRequest;
import com.example.project.DTO.Request.RegisterRequest;
import com.example.project.DTO.Response.LoginResponse;
import com.example.project.DTO.Response.RegisterResponse;

import io.jsonwebtoken.io.IOException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(SignInRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException, java.io.IOException;
}